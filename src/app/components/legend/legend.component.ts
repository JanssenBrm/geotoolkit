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

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.parseActiveLayers(this.layers);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.parseActiveLayers(this.layers);
  }

  private parseActiveLayers(layers: any[]) {

    this.activeLayers = [];
    layers.forEach(layerInfo => {
        layerInfo.layers.forEach(layer => {
          if(layer.layer.getVisible()){
            this.activeLayers.push(layer);
          }
        })
    });

  }

  toggleLayer(layer: any){

    this.ngRedux.dispatch({
      type: LayerActions.TOGGLE_LAYER,
      body: {
        layer: layer
      }
    });

  }
}
