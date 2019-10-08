import {Component, Input, OnInit} from '@angular/core';
import {NgRedux} from "@angular-redux/store/lib/src/components/ng-redux";
import {IAppState} from "../../../reducers/root.reducer";
import {ToolBoxActions} from "../../../actions/toolbox.action";
import {select} from "@angular-redux/store";
import {LayerActions} from "../../../actions/layers.action";
import {MapboxService} from "../../../services/mapbox.service";
import {UtilService} from "../../../services/util.service";

import { GeoJSON } from 'ol/format';
import { transformExtent, transform } from 'ol/proj';
import { LineString } from 'ol/geom';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {

  @select() layers;
  @select() ui;

  constructor( private ngRedux: NgRedux<IAppState>, private mapboxService: MapboxService, private utilService: UtilService) { }

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
    });

    this.ui.subscribe(state =>{
      this.drawAction = state.activeSelection;
    });
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

    const formatter = new GeoJSON();
    return formatter.writeFeature(feature, {
      featureProjection: 'EPSG:3857',
      dataProjection: this.crs
    });
  }

  getBoundingBox(feature: any){
    return transformExtent(feature.getGeometry().getExtent(), 'EPSG:3857', this.crs);
  }

  selectProjectionSystem(crs: string){
    this.ngRedux.dispatch({
      type: LayerActions.SET_PROJECTION_SYSTEM,
      body: {
        crs: crs
      }
    })
  }

  addFeature(feature: any){

    const featureList = (new GeoJSON()).readFeatures(feature, {
      featureProjection: 'EPSG:3857',
      dataProjection: this.crs
    });


    this.ngRedux.dispatch({
      type: LayerActions.ADD_FEATURE_LIST,
      body:{
        features: featureList,
        type: 'custom'
      }
    })
  }

  selectFeature(feature: any){
    this.ngRedux.dispatch({
      type: LayerActions.SELECT_FEATURE,
      body:{
        feature: feature,
        type: this.drawAction
      }
    })
  }

  removeFeature(feature: any){
    this.ngRedux.dispatch({
      type: LayerActions.REMOVE_FEATURE,
      body:{
        feature: feature,
        type: this.drawAction
      }
    })
  }

  formatLength(feature){
    return this.utilService.formatLength(new LineString(feature.getGeometry().getLinearRing(0).getCoordinates()));
  }
}
