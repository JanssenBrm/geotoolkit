
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {BACKGROUND_LAYERS} from '../config/backgroundlayers.config';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {LayerActions} from '../actions/layers.action';
import {NgRedux} from '@angular-redux/store/lib/src/components/ng-redux';
import {IAppState} from '../reducers/root.reducer';
import {UIActions} from '../actions/ui.action';

import {ImageTile} from 'ol';
import {WMSCapabilities, WMTSCapabilities} from 'ol/format';
import {WMTS, TileDebug, TileWMS} from 'ol/source';
import {optionsFromCapabilities} from 'ol/source/WMTS';
import {Tile} from 'ol/layer';

@Injectable()
export class LayerService {

  constructor(private http: HttpClient, private ngRedux: NgRedux<IAppState>) { }

  getLayers() {
    return this.getBackgroundLayers();
  }

  getBackgroundLayers() {
    return BACKGROUND_LAYERS;
  }

  loadExternalLayers(url: any, customloadLayers: string[]) {

    let parser = null;
    let type = '';

    if (url.toLowerCase().indexOf('wms') > 0 ) {
      parser = new WMSCapabilities();
      type = 'WMS';
    } else if (url.toLowerCase().indexOf('wmts') > 0 ) {
      parser = new WMTSCapabilities();
      type = 'WMTS';
    }
    return this.http.get(url, { responseType: 'text' }).pipe(
      map( response => {

        const result = parser.read(response);
        let layers = [];

        if (type === 'WMS') {
          layers  = this.readWMSCapabilities(result, url);
        } else if (type === 'WMTS') {
          layers  = this.readWMTSCapabilities(result, url);
        }

        layers.forEach((l: any) => {
            if (customloadLayers.includes(l.name)) {
              const source = l.layer.getSource();
              if (source instanceof WMTS) {
                  source.setTileLoadFunction((tile, src) => this.loadTile(tile, src, l));
              }
            }
        });


        return layers;
      }));
  }

  loadTile(tile: ImageTile, src: string, layer: any) {
    let url = src;
    if (layer.contrast && layer.contrast.enabled) {
      Object.keys(layer.contrast.params).forEach((key: string) => {
        url += `&${key}=${layer.contrast.params[key].value}`;
      });
    }
    tile.getImage().src = url;
  }

  readWMTSCapabilities(capabilities: any, url: any) {
    const layerList = [];

    capabilities.Contents.Layer.forEach(layer => {
      try {
        const timeDim = layer.Dimension ? layer.Dimension.find(dimension =>  dimension.Identifier ? dimension.Identifier.toUpperCase() === 'TIME' : Date.parse(dimension.Default)) : null;
        let times = [];

        if (timeDim) {
          times = timeDim.Value;
        }

        let sourceOptions = optionsFromCapabilities(capabilities, {
          layer: layer.Identifier,
          matrixSet: 'EPSG:3857'
        });

        if (!sourceOptions) {
          sourceOptions = optionsFromCapabilities(capabilities, {
            layer: layer.Identifier,
            matrixSet: 'EPSG:4326'
          });
        }

        if (sourceOptions) {
          const newLayer = {
            name: layer.Title,
            showInList: true,
            description: layer.Abstract,
            baseurl: url,
            layer: new Tile({
              preload: Infinity,
              source: new WMTS((sourceOptions)),
              visible: false
            }),
            times: times
          };


          const tileGridLayer = {
              name: layer.Title + '_GRID',
              showInList: false,
              layer: new Tile({
                source: new TileDebug({
                    preload: Infinity,
                    projection: 'EPSG:3857',
                    tileGrid: new WMTS((sourceOptions)).getTileGrid()
                }),
                zIndex: 99,
                visible: false
            })
          };

          this.setLayerEvents(newLayer);
          layerList.push(newLayer);
          layerList.push(tileGridLayer);
        } else {
          console.error('Layer ' + layer.Title + ' does not support EPSG:3857');
        }
      } catch (e) {
        console.error('Could not create WMTS layers for ' + layer.Title);
      }

    });

    return layerList;

  }
  readWMSCapabilities(capabilities: any, url: any) {
    const getMapURL = capabilities.Capability.Request.GetMap.DCPType[0].HTTP.Get.OnlineResource;
    const layerList = [];
    capabilities.Capability.Layer.Layer.forEach(layer => {
      if (layer.Layer) {
        layer.Layer.forEach(subLayer => {

          try {
            const timeDim = subLayer.Dimension ? subLayer.Dimension.find(dimension =>  dimension.name.toUpperCase() === 'TIME') : null;
            let times = [];

            if (timeDim) {
              times = timeDim.values.split(',');
            }

            const bbox = layer.BoundingBox.find(bbox => bbox.crs === 'EPSG:3857');

            const newLayer = {
              name: subLayer.Name,
              description: subLayer.Abstract,
              showInList: true,
              baseurl: url,
              styles: subLayer.Style,
              layer: new Tile({
                preload: Infinity,
                extent: bbox ? bbox.extent : [-20026376.39, -20048966.10, 20026376.39, 20048966.10],
                source: new TileWMS({
                  url: getMapURL,
                  params: {'LAYERS': subLayer.Name, 'TILED': true},
                }),
                visible: false
              }),
              times: times
            };

            this.setLayerEvents(newLayer);
            layerList.push(newLayer);

          } catch (e) {
            console.error('Could not create WMS layers for ' + subLayer.Title);
          }

        });
      } else {

        try {

          const timeDim = layer.Dimension ? layer.Dimension.find(dimension =>  dimension.name.toUpperCase() === 'TIME') : null;
          let times = [];

          if (timeDim) {
            times = timeDim.values.split(',');
          }

          const bbox = layer.BoundingBox.find(bbox => bbox.crs === 'EPSG:3857');

          const newLayer = {
            name: layer.Name,
            description: layer.Abstract,
            showInList: true,
            baseurl: url,
            styles: layer.Style,
            layer: new Tile({
              preload: Infinity,
              extent: bbox ? bbox.extent : [-20026376.39, -20048966.10, 20026376.39, 20048966.10],
              source: new TileWMS({
                url: getMapURL,
                params: {'LAYERS': layer.Name, 'TILED': true},
              }),
              visible: false,
            }),
            times: times
          };

          this.setLayerEvents(newLayer);
          layerList.push(newLayer);
        } catch (e) {
          console.error('Could not create WMS layers for ' + layer.Title);
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

      const handleTileSucces = function () {
        redux.dispatch({
          type: UIActions.SET_PROGRESS, body: {
            tileLoaded: true
          }
        });
      };

      tile.getImage().onload = handleTileSucces;
      tile.getImage().onerror = handleTileError;
      const tileUrl = `${layer.baseurl.split('?')[0]}?${url.split('?')[1]}`;
      tile.getImage().src = decodeURIComponent(tileUrl);
      tile.getImage().style.border = '1px solid black';


    });

  }
}
