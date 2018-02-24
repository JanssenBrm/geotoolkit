import { Injectable } from '@angular/core';
import {BACKGROUND_LAYERS} from "../config/backgroundlayers.config";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import * as ol from 'openlayers';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class LayerService {

  constructor(private http:HttpClient) { }

  getLayers(){
    return this.getBackgroundLayers();
  }

  getBackgroundLayers(){
    return BACKGROUND_LAYERS;
  }

  loadExternalLayers(url: any){

    let parser = null;
    let type = '';

    if(url.indexOf('wms') > 0 )
    {
      parser = new ol.format.WMSCapabilities();
      type = 'WMS';
    }
    return this.http.get(url, { responseType: 'text' })
      .map( response => {

        var result = parser.read(response);
        var layers = [];

        console.log(result);

        if(type === 'WMS'){
          layers  = this.readWMSCapabilities(result);
        }


        return layers;
      });
  }

  readWMSCapabilities(capabilities: any){
    const getMapURL = capabilities.Capability.Request.GetMap.DCPType[0].HTTP.Get.OnlineResource;
    const layers = capabilities.Capability.Layer.Layer.map(layer => {
      const layerInfo = {
        name: layer.Name,
        description: layer.Abstract,
        layer: new ol.layer.Tile({
          extent: layer.BoundingBox.find(bbox => bbox.crs === 'EPSG:3857').extent,
          source: new ol.source.TileWMS({
            url: getMapURL,
            params: {'LAYERS': layer.Name, 'TILED': true},
          }),
          visible:false
        })
      };
      return layerInfo;
    });
    return layers;
  }


}
