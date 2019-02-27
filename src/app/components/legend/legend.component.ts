import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LayerActions} from "../../actions/layers.action";
import {UIActions} from "../../actions/ui.action";
import {IAppState} from "../../reducers/root.reducer";
import {NgRedux} from "@angular-redux/store/lib/src/components/ng-redux";

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnInit, OnChanges {


  @Input()
  layers: any[];

  activeLayers: any[];
  baseIndex: number;
  zIndex: number;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.activeLayers = [];
    this.baseIndex = 1;
    this.zIndex = this.baseIndex;
    this.parseActiveLayers(this.layers);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.parseActiveLayers(this.layers);
  }

  private parseActiveLayers(layers: any[]) {

    layers.forEach(layerInfo => {
        layerInfo.layers.forEach(layer => {
          if(layer.layer.getVisible() && layer.showInList){
            if(this.activeLayers.indexOf(layer) < 0) {
              layer.layer.setZIndex(this.zIndex);
              this.activeLayers.push(layer);
              this.zIndex++;
            }
          }
        })
    });

  }

  moveLayer(){

    let zIndex = this.baseIndex;
    this.activeLayers.forEach(layer => {
        layer.layer.setZIndex(zIndex);
        zIndex++;
    });
  }

  removeLayer(layer){
    this.toggleLayer(layer, false);
    this.activeLayers.splice(this.activeLayers.indexOf(layer), 1);
    this.moveLayer();
  }

  toggleLayer(layer: any, visible: boolean = null){

    this.ngRedux.dispatch({
      type: LayerActions.TOGGLE_LAYER,
      body: {
        layer: layer,
        visible: visible,
      }
    });

  }

  toggleGridLayer(layer: any, visible: boolean = null){
    layer.gridVisible = !layer.gridVisible;
    console.log("LAYER GRID", layer.gridVisible);
    this.ngRedux.dispatch({
        type: LayerActions.TOGGLE_GRID_LAYER,
        body: {
            layer: layer,
            visible: visible,
        }
    });
  }
}
