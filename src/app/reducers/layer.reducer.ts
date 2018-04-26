import {LayerActions} from "../actions/layers.action";
import * as ol from 'openlayers';
import {UIActions} from "../actions/ui.action";
import {uiReducer} from "./ui.reducer";

export interface LayerState {
  backgroundLayers: any[],
  layers: any[],
  layerDates: any[],
  extent: number[],
  features: any[],
  crs: string,
  activeFeature: any,
  times: any[]
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

  switch(action.type){
    case LayerActions.SET_BACKGROUND_LAYERS:

      console.log("LAYER REDUCER", "Setting background layers", action);

      state = Object.assign({}, state, {
        backgroundLayers: action.body
      });
      break;

    case LayerActions.SELECT_BACKGROUND_LAYER:

      console.log("LAYER REDUCER", "Selecting background layers", action);
      const backgroundLayers = state.backgroundLayers.map(layer => {
          if(layer.layer.getVisible())
            layer.layer.setVisible(false);
          if(layer.name == action.body)
            layer.layer.setVisible(true);
          return layer;
        }
      );

      state = Object.assign({}, state, {
        backgroundLayers: backgroundLayers
      });
      break;
    case LayerActions.ADD_LAYERS:

      console.log("LAYER REDUCER", "Adding layers", action);
      const newLayers = state.layers.concat(action.body);
      state = Object.assign({}, state, {
        layers: newLayers,
        layerDates: []
      });

      break;

    case LayerActions.SET_EXTENT:

      console.log("LAYER REDUCER", "Setting extent", action);
      state = Object.assign({}, state, {
        extent: action.body.extent
      });

      break;

    case LayerActions.ADD_FEATURE:

      console.log("LAYER REDUCER", "Adding feature", action);
      const feature = action.body;
      const currFeatures = state.features;
      const featureList = currFeatures.find(featureInfo => featureInfo.type === feature.type);
      if(featureList){
        featureList.features.push(feature.feature);
      }else{
        currFeatures.push({
          type: feature.type,
          features: [feature.feature]
        })
      }

      state = Object.assign({}, state, {
        features: currFeatures
      });

      break;

    case LayerActions.ADD_FEATURE_LIST:
      console.log("LAYER REDUCER", "Adding feature list", action);
      const features = action.body;

      features.features.forEach(feature => {
        state = layerReducer(state, {type: LayerActions.ADD_FEATURE, body: { type: features.type, feature: feature }});
      });

      break;


    case LayerActions.SELECT_FEATURE:

      console.log("LAYER REDUCER", "Selecting feature", action);
      const featList = state.features.find(featureInfo => featureInfo.type === action.body.type);

      if(featList){
        const activeFeature = featList.features.find(feat => feat == action.body.feature);

        if(activeFeature){
          state = Object.assign({}, state, {
            activeFeature: activeFeature,
          });
        }
      }

      break;
    case LayerActions.SET_ACTIVE_FEATURE:

      console.log("LAYER REDUCER", "Setting active feature", action);

      state = Object.assign({}, state, {
        activeFeature: action.body.feature,
      });

      break;

    case LayerActions.SET_PROJECTION_SYSTEM:

      console.log("LAYER REDUCER", "Setting projection system", action);
      const newCrs = action.body.crs;
      state = Object.assign({}, state, {
        crs: newCrs
      });

      break;

    case LayerActions.SELECT_DATE:

      console.log("LAYER REDUCER", "Load date", action);


      state.layers.forEach(info => {
        info.layers.forEach( layer => {
          if(layer.layer.getVisible()) {

            const date = getTime(action.body.date, layer.times);

            if (layer.layer.getSource() instanceof ol.source.ImageWMS || layer.layer.getSource() instanceof ol.source.TileWMS) {
              let params = (<ol.source.ImageWMS>layer.layer.getSource()).getParams();
              params['TIME'] = (date ? date : action.body.date);
              (<ol.source.ImageWMS>layer.layer.getSource()).updateParams(params);
            } else if (layer.layer.getSource() instanceof ol.source.WMTS) {
              const dimensions = (<ol.source.WMTS>layer.layer.getSource()).getDimensions();
              (<any>dimensions).TIME = (date ? date : action.body.date);
              (<ol.source.WMTS>layer.layer.getSource()).updateDimensions(dimensions);
            }

            if (!date) {
              console.log("Could not find date " + date + " for layer " + layer.name);
            }
          }

        })
      });

      break;

    case LayerActions.TOGGLE_LAYER:

      console.log("LAYER REDUCER", "Toggle layer", action);

      const layer = action.body.layer;

      if(action.body.visible != null){
        layer.layer.setVisible(action.body.visible);
      }else{
        layer.layer.setVisible(!layer.layer.getVisible());
      }

      const times = loadTimes(state.layers);

      if(layer.layer.getVisible()){

        layerReducer(state,{
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
  }
  return state;
}


function loadTimes(layers: any[]){

  let times = [];
  layers.forEach(info => {
    info.layers.forEach(layer =>{
      if(layer.layer.getVisible()){
        console.log(layer.name, "IS VISIBLE");
        times.push(layer.times);
      }
    })
  });

  return times;
}

function getTime(date: string, times: string[]){

  let layerDate = null;
  for ( let time of times) {
    const d = new Date(time);
    const month = d.getMonth() + 1;
    const day = d.getDate();
    const timeDate = d.getFullYear() + "-" + ( month < 10 ? '0' : '') + month + "-" + (day < 10 ? '0' : '') + day;

    if ( timeDate === date ){
      layerDate = time;
      break;
    }
  };

  return layerDate;
}
