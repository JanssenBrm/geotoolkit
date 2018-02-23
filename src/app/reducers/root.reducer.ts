import {l_init_state, layerReducer, LayerState} from './layer.reducer';
import { combineReducers } from 'redux';

export interface IAppState {
  layers: LayerState;
}

export const INITIAL_STATE: IAppState = {
  layers: l_init_state,

};

export const rootReducer = combineReducers<IAppState>({
  layers: layerReducer
});
