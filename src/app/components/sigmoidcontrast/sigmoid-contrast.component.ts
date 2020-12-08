import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as Highcharts from 'highcharts';

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
export class SigmoidContrastComponent implements AfterViewInit {

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

    originalLoaded = false;
    contrastLoaded = false;

    custom = '';
    url = '';
    contrast_url = '';

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

    constructor() {
    }

    ngAfterViewInit() {
        if (this.layer.contrast.params.alpha && this.layer.contrast.params.beta) {
            this.alpha = +this.layer.contrast.params.alpha;
            this.beta = +this.layer.contrast.params.beta;
        }

        const url = '{host}layer={layer}&style=&tilematrixset=EPSG%3A3857&Service=WMTS&Request=GetTile&Version=1.0.0&Format=image%2Fpng&TileMatrix=EPSG%3A3857%3A12&TileCol=2103&TileRow=1365&TIME=2020-11-18';
        this.url = url
            .replace('{host}', this.layer.layer.getSource().getUrls()[0])
            .replace('{layer}', this.layer.layer.getSource().getLayer());
        this.chart = Highcharts.chart('chart', this.options);
        this.updateSeries();
    }

    updateSeries() {
        if (this.chart.series.length > 0) {
            this.chart.series[0].remove(false);
        }
        this.chart.addSeries(this.getSigmoidSeries(), true);
        this.chart.reflow();
        this.updateUrls();
    }

    updateUrls() {
        this.contrastLoaded = false;
        this.contrast_url = `${this.url}&alpha=${this.alpha}&beta=${this.beta}`;
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
