import { Component, OnInit } from '@angular/core';
import {select} from "@angular-redux/store";
import {NgRedux} from "@angular-redux/store/lib/src/components/ng-redux";
import {IAppState} from "../../../reducers/root.reducer";
import {LayerActions} from "../../../actions/layers.action";
import {LayerService} from "../../../services/layer.service";

@Component({
  selector: 'app-layerselection',
  templateUrl: './layerselection.component.html',
  styleUrls: ['./layerselection.component.scss']
})
export class LayerselectionComponent implements OnInit {

  @select() layers;

  constructor(private ngRedux: NgRedux<IAppState>, private layerService: LayerService) { }

  backgroundLayers: any[];
  layerInfo: any[];

  ngOnInit() {
    this.layers.subscribe(state =>{
      this.backgroundLayers =  state.backgroundLayers;
      this.layerInfo = state.layers;
    });
  }

  selectBackgroundLayer(layer : any){
    this.ngRedux.dispatch({
      type: LayerActions.SELECT_BACKGROUND_LAYER,
      body: layer
    })
  }

  loadExternalSource(url: any){
    this.layerService.loadExternalLayers(url).subscribe(layers => {
      this.ngRedux.dispatch({
        type: LayerActions.ADD_LAYERS,
        body: {
          url: url,
          layers: layers
        }
      });
      console.log("layers", layers);
    })
  }

  toggleLayer(layer: any){
    layer.setVisible(!layer.getVisible());
  }

}
