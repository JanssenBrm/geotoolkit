import { Injectable } from '@angular/core';
import {BACKGROUND_LAYERS} from "../config/backgroundlayers.config";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import * as ol from 'openlayers';
import {HttpClient} from "@angular/common/http";
import {LayerActions} from "../actions/layers.action";
import {NgRedux} from "@angular-redux/store/lib/src/components/ng-redux";
import {IAppState} from "../reducers/root.reducer";
import {UIActions} from "../actions/ui.action";

@Injectable()
export class LayerService {

  constructor(private http:HttpClient, private ngRedux: NgRedux<IAppState>) { }

  getLayers(){
    return this.getBackgroundLayers();
  }

  getBackgroundLayers(){
    return BACKGROUND_LAYERS;
  }

  loadExternalLayers(url: any){

    let parser = null;
    let type = '';

    if(url.toLowerCase().indexOf('wms') > 0 )
    {
      parser = new ol.format.WMSCapabilities();
      type = 'WMS';
    }else if(url.toLowerCase().indexOf('wmts') > 0 )
    {
      parser = new ol.format.WMTSCapabilities();
      type = 'WMTS';
    }
    return this.http.get(url, { responseType: 'text' })
      .map( response => {

        var result = parser.read(response);
        var layers = [];

        console.log(result);

        if(type === 'WMS'){
          layers  = this.readWMSCapabilities(result);
        } else if(type === 'WMTS'){
          layers  = this.readWMTSCapabilities(result);
        }


        return layers;
      });
  }

  readWMTSCapabilities(capabilities: any){
    const layerList = [];

    console.log("RESULT", capabilities);

    capabilities.Contents.Layer.forEach(layer =>{

      console.log(layer);
      try {
        const timeDim = layer.Dimension ? layer.Dimension.find(dimension =>  dimension.Identifier ? dimension.Identifier.toUpperCase() === 'TIME' : Date.parse(dimension.Default)) : null;
        let times = [];

        if(timeDim){
          times = timeDim.Value;
        }

        let sourceOptions = ol.source.WMTS.optionsFromCapabilities(capabilities, {
          layer: layer.Identifier,
          matrixSet: 'EPSG:3857'
        });

        if(!sourceOptions){
          sourceOptions = ol.source.WMTS.optionsFromCapabilities(capabilities, {
            layer: layer.Identifier,
            matrixSet: 'EPSG:4326'
          });
        }

        if (sourceOptions) {
          const newLayer = {
            name: layer.Title,
            description: layer.Abstract,
            layer: new ol.layer.Tile({
              source: new ol.source.WMTS((sourceOptions)),
              visible: false
            }),
            times: times
          };

          this.setLayerEvents(newLayer);
          layerList.push(newLayer);
        } else {
          console.error("Layer " + layer.Title + " does not support EPSG:3857");
        }
      }catch(e){
        console.error("Could not create WMTS layers for " + layer.Title);
      }

    });

    return layerList;

  }
  readWMSCapabilities(capabilities: any){
    const getMapURL = capabilities.Capability.Request.GetMap.DCPType[0].HTTP.Get.OnlineResource;
    const layerList = [];
    capabilities.Capability.Layer.Layer.forEach(layer => {
      if(layer.Layer){
        layer.Layer.forEach(subLayer => {

          try{
            const timeDim = subLayer.Dimension ? subLayer.Dimension.find(dimension =>  dimension.name.toUpperCase() === 'TIME') : null;
            let times = [];

            if(timeDim){
              times = timeDim.values.split(',');
            }

            const newLayer = {
              name: subLayer.Name,
              description: subLayer.Abstract,
              layer: new ol.layer.Tile({
                extent: layer.BoundingBox.find(bbox => bbox.crs === 'EPSG:3857').extent,
                source: new ol.source.TileWMS({
                  url: getMapURL,
                  params: {'LAYERS': subLayer.Name, 'TILED': true},
                }),
                visible: false
              }),
              times: times
            };

            this.setLayerEvents(newLayer);
            layerList.push(newLayer);

          }catch(e){
            console.error("Could not create WMTS layers for " + subLayer.Title);
          }

        });
      }else{

        try{

          const timeDim = layer.Dimension ? layer.Dimension.find(dimension =>  dimension.name.toUpperCase() === 'TIME') : null;
          let times = [];

          if(timeDim){
            times = timeDim.values.split(',');
          }

          const newLayer = {
            name: layer.Name,
            description: layer.Abstract,
            layer: new ol.layer.Tile({
              extent: layer.BoundingBox.find(bbox => bbox.crs === 'EPSG:3857').extent,
              source: new ol.source.TileWMS({
                url: getMapURL,
                params: {'LAYERS': layer.Name, 'TILED': true},
              }),
              visible:false,
            }),
            times: times
          };

          this.setLayerEvents(newLayer);
          layerList.push(newLayer);
        } catch(e){
          console.error("Could not create WMTS layers for " + layer.Title);
        }

      }
    });
    return layerList;
  }

  setLayerEvents(layer: any) {

    const redux = this.ngRedux;
    const http = this.http;

    layer.layer.getSource().setTileLoadFunction((tile, url) => {


      redux.dispatch({
        type: UIActions.SET_PROGRESS, body: {
          tileLoading: true
        }
      });

      const handleTileError = function () {
        redux.dispatch({
          type: UIActions.SET_PROGRESS, body: {
            tileLoaded: true,
            tileError: true
          }
        });
      };

      const handleTileSucces = function (){
        redux.dispatch({
          type: UIActions.SET_PROGRESS, body: {
            tileLoaded: true
          }
        });
      };

      tile.getImage().onload = handleTileSucces;
      tile.getImage().onerror = handleTileError;
      tile.getImage().src = url;


    });

    /*layer.layer.getSource().on('tileloadend', function () {
      redux.dispatch({
        type: UIActions.SET_PROGRESS, body: {
          tileLoaded: true
        }
      });
    });*/
  }
}
