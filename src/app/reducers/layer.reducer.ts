export interface LayerState {
  layers: any[]
}

export const l_init_state: LayerState = {
  layers: [],
};

export function layerReducer(state = l_init_state, action) {
  return state;
}
