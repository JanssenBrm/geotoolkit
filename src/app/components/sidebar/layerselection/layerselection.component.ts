import { Component, OnInit } from '@angular/core';
import {select} from "@angular-redux/store";
import {NgRedux} from "@angular-redux/store/lib/src/components/ng-redux";
import {IAppState} from "../../../reducers/root.reducer";
import {LayerActions} from "../../../actions/layers.action";

@Component({
  selector: 'app-layerselection',
  templateUrl: './layerselection.component.html',
  styleUrls: ['./layerselection.component.scss']
})
export class LayerselectionComponent implements OnInit {

  @select() layers;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  backgroundLayers: any[];

  ngOnInit() {
    this.layers.subscribe(state =>{
      this.backgroundLayers =  state.backgroundLayers;
    });
  }

  selectBackgroundLayer(layer : any){
    this.ngRedux.dispatch({
      type: LayerActions.SELECT_BACKGROUND_LAYER,
      body: layer
    })
  }

}
