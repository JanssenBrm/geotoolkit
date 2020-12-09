import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as Highcharts from 'highcharts';
import { transformExtent, transform } from 'ol/proj';
import { getCenter } from 'ol/extent';
import { Vector } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Map, View, Overlay } from 'ol';
import { defaults, ZoomToExtent, ScaleLine} from 'ol/control';
import { defaults as interactionDefaults} from 'ol/interaction';
import { Tile } from 'ol/layer';
import { OSM, WMTS } from 'ol/source';
import {LayerService} from '../../services/layer.service';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
    selector: 'app-sigmoidcontrast',
    templateUrl: './sigmoid-contrast.component.html',
    styleUrls: ['./sigmoid-contrast.component.scss']
})
export class SigmoidContrastComponent implements OnInit {

    @Input()
    layer: any;

    @Input()
    extent: number[];

    @Output()
    confirm: EventEmitter<{ alpha: number, beta: number }> = new EventEmitter<{alpha: number; beta: number}>();

    @Output()
    disable: EventEmitter<void> = new EventEmitter<void>();

    alpha = 0.5;
    beta = 1;


    original_layer: Tile;
    result_layer: Tile;

    tilecounter = {
        original: 0,
        result: 0
    };

    options: any = {
        chart: {
            type: 'spline'
        },
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        tooltip: {
            formatter: function () {
                return `X: <b>${this.x.toFixed(2)}</b> - Scaled: <b>${this.y.toFixed(2)}</b>`;
            }
        },
        xAxis: {
            title: 'Value'
        },
        yAxis: {
            max: 1,
            min: 0,
            title: 'Scaled'
        },
        series: []
    };

    chart: Highcharts.Chart;

    constructor(
        private layerService: LayerService
    ) {
    }

    ngOnInit() {
        if (this.layer.contrast.params.alpha && this.layer.contrast.params.beta) {
            this.alpha = +this.layer.contrast.params.alpha;
            this.beta = +this.layer.contrast.params.beta;
        }
        this.setupOriginalMap(this.layer.layer, this.extent);
        this.chart = Highcharts.chart('chart', this.options);
        this.updateSeries();
    }

    setupOriginalMap(layer: any, extent: number[]) {
        this.original_layer = this.createLayer(layer, 'original');
        this.createMap('current_map', this.original_layer, extent);
    }

    createLayer(layer: any, type: string): Tile {
        const new_layer = this.copyLayer(layer);
        new_layer.getSource().on('tileloadstart', () => {
            this.tilecounter[type] += 1;
        });
        new_layer.getSource().on('tileloadend', () => {
            this.tilecounter[type] -= 1;
        });
        new_layer.getSource().on('tileloaderror', () => {
            this.tilecounter[type] -= 1;
        });
        return new_layer;
    }

    copyLayer(layer: any): Tile {
        const source = layer.getSource();
        return new Tile({
            ...layer.getProperties(),
            preload: 0,
            source: new WMTS({
                layer: source.getLayer(),
                tileGrid: source.getTileGrid(),
                projection: source.getProjection(),
                dimensions: source.getDimensions(),
                urls: source.getUrls(),
                matrixSet: source.getMatrixSet(),
            })
        });
    }

    setupResultMap(layer: any, extent: number[]) {
        if (!this.result_layer) {
            this.result_layer = this.createLayer(layer, 'result');
            this.createMap('result_map', this.result_layer, extent);
        }

        this.result_layer.getSource().setTileLoadFunction((tile, src) => this.layerService.loadTile(tile, src, {
            contrast: {
                enabled: true,
                params: {
                    alpha: this.alpha,
                    beta: this.beta
                }
            }
        }));
        this.result_layer.getSource().refresh();

    }

    createMap(id: string, layer: any, extent: number[]): Map {
        const center = getCenter(extent);
        const map = new Map({
            layers: [this.getBackgroundLayer(), layer],
            maxTilesLoading: 128,
            controls: defaults({
                attribution: false,
                rotate: false,
                zoom: false
            }),
            interactions: interactionDefaults({
                doubleClickZoom: false,
                dragAndDrop: false,
                keyboardPan: false,
                keyboardZoom: false,
                mouseWheelZoom: false,
                dragPan: false,
                pointer: false,
                select: false,
                shiftDragZoom: false
            }),
            view: new View({
                projection: 'EPSG:3857',
                center: center,
                zoom: 12
            }),
            target: id
        });

        setTimeout(() => {
            map.updateSize();
        }, 200);
        return map;
    }

    getBackgroundLayer() {
        return new Tile({
            id: 'background',
            source: new OSM(),
            visible: true
        });
    }

    updateSeries() {
        if (this.chart.series.length > 0) {
            this.chart.series[0].remove(false);
        }
        this.chart.addSeries(this.getSigmoidSeries(), true);
        this.chart.reflow();
        this.updateResult();
    }

    updateResult() {
        this.setupResultMap(this.layer.layer, this.extent);
    }


    calculateSigmoid(x: number): number {
        const numer = 1 / (1 + Math.exp(this.beta * (this.alpha - x))) - 1 / (1 + Math.exp(this.beta * this.alpha));
        const denom = 1 / (1 + Math.exp(this.beta * (this.alpha - 1))) - 1 / (1 + Math.exp(this.beta * this.alpha));
        const gu = Math.max(0.0, Math.min(1.0, numer / denom));
        return gu;
    }

    getSigmoidSeries(): Highcharts.SeriesSplineOptions {

        const samples = 50;
        const min = 0;
        const max = 1;
        const step = (max - min) / samples;

        return {
            name: 'Sigmoid',
            type: 'spline',
            marker: {
                enabled: false
            },
            color: '#0375ff',
            data: new Array(samples + 1).fill(0).map((value, idx) => {
                const x = min + (idx * step);
                const y = this.calculateSigmoid(x);
                return [x, y];
            })
        };
    }

    updateAlpha(val: number) {
        this.alpha = val;
        this.updateSeries();
    }

    updateBeta(val: number) {
        this.beta = val;
        this.updateSeries();
    }

    close(cancel: boolean = false) {
        this.confirm.emit(cancel ? undefined : { alpha: this.alpha, beta: this.beta});
    }


}
