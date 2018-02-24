import {LayerActions} from "../actions/layers.action";

export interface LayerState {
  backgroundLayers: any[],
  layers: any[],
}

export const l_init_state: LayerState = {
  backgroundLayers: [],
  layers: [],
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
  }
  return state;
}
