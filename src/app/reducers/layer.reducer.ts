import {LayerActions} from "../actions/layers.action";

export interface LayerState {
  backgroundLayers: any[],
  layers: any[],
  extent: number[],
  features: any[];
  crs: string;
  activeFeature: any;
}

export const l_init_state: LayerState = {
  backgroundLayers: [],
  layers: [],
  extent: null,
  features: [],
  crs: 'EPSG:3857',
  activeFeature: null,
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
        layers: newLayers
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

    case LayerActions.SET_PROJECTION_SYSTEM:

      console.log("LAYER REDUCER", "Setting projection system", action);
      const newCrs = action.body.crs;
      state = Object.assign({}, state, {
        crs: newCrs
      });

      break;
  }
  return state;
}
