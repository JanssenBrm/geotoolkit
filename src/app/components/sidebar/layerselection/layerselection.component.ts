import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {NgRedux} from '@angular-redux/store/lib/src/components/ng-redux';
import {IAppState} from '../../../reducers/root.reducer';
import {LayerActions} from '../../../actions/layers.action';
import {LayerService} from '../../../services/layer.service';
import {UIActions} from '../../../actions/ui.action';
import {SOURCES} from '../../../config/sources.config';
import {StyleselectionComponent} from '../styleselection/styleselection.component';
import {MatDialog} from '@angular/material';
import {isNullOrUndefined} from 'util';

@Component({
    selector: 'app-layerselection',
    templateUrl: './layerselection.component.html',
    styleUrls: ['./layerselection.component.scss']
})
export class LayerselectionComponent implements OnInit {

    @select() layers;
    backgroundLayers: any[];
    layerInfo: any[];
    sources: any[];
    status: string;
    searchFilter: string;

    contrastEnabled: string[] = [];

    constructor(private ngRedux: NgRedux<IAppState>, private layerService: LayerService, public dialog: MatDialog) {
    }

    ngOnInit() {
        this.status = '';
        this.searchFilter = '';
        this.sources = SOURCES;
        this.layers.subscribe(state => {
            this.backgroundLayers = state.backgroundLayers;
            this.layerInfo = state.layers;

            this.ngRedux.dispatch({
                type: UIActions.SET_CALENDAR_DATES,
                body: {
                    times: state.times
                }
            });

        });
    }

    selectBackgroundLayer(layer: any) {
        this.ngRedux.dispatch({
            type: LayerActions.SELECT_BACKGROUND_LAYER,
            body: layer
        });
    }

    addSource(event: any) {
        this.status = 'Loading source';
        const source = this.sources.find(source => source.name === event);
        const contrastLayers: string[] = source.contrastLayers.map((l) => l.layer);

        this.layerService.loadExternalLayers(source.url, contrastLayers).subscribe(layers => {
            this.status = '';
            this.ngRedux.dispatch({
                type: LayerActions.ADD_LAYERS,
                body: {
                    name: source.name,
                    description: source.description,
                    url: source.url,
                    infoUrl: source.infoUrl,
                    imageUrl: source.imageUrl,
                    contrastLayers: source.contrastLayers || [],
                    layers: layers.map((l: any) => {
                        if (contrastLayers.includes(l.name)) {
                            l.contrast = source.contrastLayers.find((cl) => cl.layer === l.name);
                        }
                        return l;
                    })
                }
            });
        }, error => {
            this.status = `An error occurred - ${error.message}`;
        });
    }

    loadExternalSource(event: any) {
        this.status = 'Loading external source';
        const url = event.value;
        this.layerService.loadExternalLayers(url, []).subscribe(layers => {
                this.status = '';
                this.ngRedux.dispatch({
                    type: LayerActions.ADD_LAYERS,
                    body: {
                        url: url,
                        layers: layers
                    }
                });
            },
            error => {
                this.status = `An error occurred - ${error.message}`;
            });

        event.value = '';
    }

    toggleLayer(layer: any) {

        if (!layer.layer.getVisible() && layer.styles && layer.styles.length > 0) {

            const styleSelectionRef = this.dialog.open(StyleselectionComponent, {
                width: '500px',
                data: {styles: layer.styles}
            });

            styleSelectionRef.afterClosed().subscribe(result => {

                if (!isNullOrUndefined(result)) {
                    const params = layer.layer.getSource().getParams();
                    params.STYLES = result;
                    layer.layer.getSource().updateParams(params);

                    this.ngRedux.dispatch({
                        type: LayerActions.TOGGLE_LAYER,
                        body: {
                            layer: layer
                        }
                    });
                }
            });

        } else {
            this.ngRedux.dispatch({
                type: LayerActions.TOGGLE_LAYER,
                body: {
                    layer: layer
                }
            });
        }
    }

    toggleContrast(layer: any): void {
        if (this.contrastEnabled.includes(layer.name)) {
            this.contrastEnabled = this.contrastEnabled.filter((l: string) => l !== layer.name);
            layer.contrast.enabled = false;
        } else {
            this.contrastEnabled = [...this.contrastEnabled, layer.name];
            layer.contrast.enabled = true;
        }
        this.reloadLayer(layer);
    }

    setContrastValue(layer: any, key: string, value: number) {
        layer.contrast.params[key].value = value;
        this.reloadLayer(layer);
    }
    getValueFromContrast(key: string, layer: any) {
        return layer.contrast.params[key].value;
    }
    reloadLayer(layer: any) {
        layer.layer.getSource().refresh();
    }


}
