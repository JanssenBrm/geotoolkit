import { Component, OnInit } from '@angular/core';
import {NgRedux} from "@angular-redux/store/lib/src/components/ng-redux";
import {IAppState} from "../../../reducers/root.reducer";
import {ToolBoxActions} from "../../../actions/toolbox.action";
import {select} from "@angular-redux/store";
import * as ol from 'openlayers';
import {LayerActions} from "../../../actions/layers.action";

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {

  @select() layers;

  constructor( private ngRedux: NgRedux<IAppState>) { }

  drawAction: string;
  featureList: any[];
  crs: string;

  ngOnInit() {

    this.crs = 'EPSG:3857';

    this.featureList = [];
    this.layers.subscribe(state =>{
      this.crs = state.crs;
      state.features.forEach(featureInfo =>{
        this.featureList[featureInfo.type] = featureInfo.features;
      });
    })
  }

  setDrawAction(action: string){

    this.drawAction = (this.drawAction === action ? "" : action);

    this.ngRedux.dispatch({
      type: ToolBoxActions.SET_SELECTION_TYPE,
      body: {
        selection: this.drawAction
      }
    });
  }

  formatFeatureGeometry(feature: any){

    const formatter = new ol.format.GeoJSON();
    return formatter.writeFeature(feature, {
      featureProjection: 'EPSG:3857',
      dataProjection: this.crs
    });
  }

  getBoundingBox(feature: any){
    return ol.proj.transformExtent(feature.getGeometry().getExtent(), 'EPSG:3857', this.crs);
  }

  selectProjectionSystem(crs: string){
    this.ngRedux.dispatch({
      type: LayerActions.SET_PROJECTION_SYSTEM,
      body: {
        crs: crs
      }
    })
  }

}
