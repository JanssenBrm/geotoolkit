import {LayerActions} from '../actions/layers.action';
import {UIActions} from '../actions/ui.action';
import {uiReducer} from './ui.reducer';

import { TileWMS, ImageWMS, WMTS } from 'ol/source';

export interface LayerState {
  backgroundLayers: any[];
  layers: any[];
  layerDates: any[];
  extent: number[];
  features: any[];
  crs: string;
  activeFeature: any;
  times: any[];
}

export const l_init_state: LayerState = {
  backgroundLayers: [],
  layers: [],
  layerDates: [],
  extent: null,
  features: [],
  crs: 'EPSG:3857',
  activeFeature: null,
  times: []
};

export function layerReducer(state = l_init_state, action) {

  switch (action.type) {
    case LayerActions.SET_BACKGROUND_LAYERS:


      state = Object.assign({}, state, {
        backgroundLayers: action.body
      });
      break;

    case LayerActions.SELECT_BACKGROUND_LAYER:

      const backgroundLayers = state.backgroundLayers.map(layer => {
          if (layer.layer.getVisible()) {
            layer.layer.setVisible(false);
          }
          if (action.body !== 'None' && layer.name === action.body) {
            layer.layer.setVisible(true);
          }
          return layer;
        }
      );

      state = Object.assign({}, state, {
        backgroundLayers: backgroundLayers
      });
      break;
    case LayerActions.ADD_LAYERS:

      const newLayers = state.layers.concat(action.body);
      state = Object.assign({}, state, {
        layers: newLayers,
        layerDates: []
      });

      break;

    case LayerActions.SET_EXTENT:
      state = Object.assign({}, state, {
        extent: action.body.extent
      });

      break;

    case LayerActions.ADD_FEATURE:

      const feature = action.body;
      const currFeatures = state.features;
      const featureList = currFeatures.find(featureInfo => featureInfo.type === feature.type);
      if (featureList) {
        featureList.features.push(feature.feature);
      } else {
        currFeatures.push({
          type: feature.type,
          features: [feature.feature]
        });
      }

      state = Object.assign({}, state, {
        features: currFeatures
      });

      break;

    case LayerActions.ADD_FEATURE_LIST:
      const features = action.body;

      features.features.forEach(feature => {
        state = layerReducer(state, {type: LayerActions.ADD_FEATURE, body: { type: features.type, feature: feature }});
      });

      break;


    case LayerActions.SELECT_FEATURE:
      const featList = state.features.find(featureInfo => featureInfo.type === action.body.type);

      if (featList) {
        const activeFeature = featList.features.find(feat => feat == action.body.feature);

        if (activeFeature) {
          state = Object.assign({}, state, {
            activeFeature: activeFeature,
          });
        }
      }

      break;
    case LayerActions.REMOVE_FEATURE:
      const rmFeatList = state.features.find(featureInfo => featureInfo.type === action.body.type);

      if (rmFeatList) {
        rmFeatList.features =  rmFeatList.features.filter(feature => feature !== action.body.feature);
      }

      state = Object.assign({}, state);


      break;
    case LayerActions.SET_ACTIVE_FEATURE:

      state = Object.assign({}, state, {
        activeFeature: action.body.feature,
      });

      break;

    case LayerActions.SET_PROJECTION_SYSTEM:
      const newCrs = action.body.crs;
      state = Object.assign({}, state, {
        crs: newCrs
      });

      break;

    case LayerActions.SELECT_DATE:

      state.layers.forEach(info => {
        info.layers.forEach( layer => {
          if (layer.layer.getVisible()) {

            const date = getTime(action.body.date, layer.times);

            if (layer.layer.getSource() instanceof ImageWMS || layer.layer.getSource() instanceof TileWMS) {
              const params = (<ImageWMS>layer.layer.getSource()).getParams();
              params['TIME'] = (date ? date : action.body.date);
              (<ImageWMS>layer.layer.getSource()).updateParams(params);
            } else if (layer.layer.getSource() instanceof WMTS) {
              const dimensions = (<WMTS>layer.layer.getSource()).getDimensions();
              (<any>dimensions).TIME = (date ? date : action.body.date);
              (<WMTS>layer.layer.getSource()).updateDimensions(dimensions);
            }

            if (!date) {
              console.log('Could not find date ' + date + ' for layer ' + layer.name);
            }
          }

        });
      });

      break;

    case LayerActions.TOGGLE_LAYER:


      const layer = action.body.layer;

      if (action.body.visible != null) {
        layer.layer.setVisible(action.body.visible);
      } else {
        layer.layer.setVisible(!layer.layer.getVisible());
      }


      const times = loadTimes(state.layers);

      if (layer.layer.getVisible()) {
        layerReducer(state, {
          type: LayerActions.SET_EXTENT,
          body: {
            extent: layer.layer.getExtent()
          }
        });
      }

      state = Object.assign({}, state, {
        times: times
      });

      break;
  case LayerActions.TOGGLE_GRID_LAYER:

      const layerName = action.body.layer.name;

      state.layers.forEach(list =>  {
          const gridLayer = list.layers.find(l => l.name === layerName + '_GRID');

          if (gridLayer) {
              if (action.body.visible != null) {
                  gridLayer.layer.setVisible(action.body.visible);
              } else {
                  gridLayer.layer.setVisible(!gridLayer.layer.getVisible());
              }
          }
      } );
      break;
  }
  return state;
}


function loadTimes(layers: any[]) {

  const times = [];
  layers.forEach(info => {
    info.layers.forEach(layer => {
      if (layer.layer.getVisible() && layer.showInList) {
        times.push(layer.times);
      }
    });
  });

  return times;
}

function getTime(date: string, times: string[]) {

  let layerDate = null;
  for ( const time of times) {
    const d = new Date(time);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const timeDate = d.getFullYear() + '-' + ( month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day;

    if ( timeDate === date ) {
      layerDate = time;
      break;
    }
  }

  return layerDate;
}
