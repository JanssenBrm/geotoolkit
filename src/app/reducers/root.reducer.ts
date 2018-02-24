import {l_init_state, layerReducer, LayerState} from './layer.reducer';
import { combineReducers } from 'redux';
import {u_init_state, uiReducer, UIState} from "./ui.reducer";

export interface IAppState {
  layers: LayerState;
  ui: UIState
}

export const INITIAL_STATE: IAppState = {
  layers: l_init_state,
  ui: u_init_state

};

export const rootReducer = combineReducers<IAppState>({
  layers: layerReducer,
  ui: uiReducer
});
