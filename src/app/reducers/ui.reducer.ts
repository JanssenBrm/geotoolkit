import {ToolBoxActions} from "../actions/toolbox.action";

export interface UIState {
  activeAction: string,
  activeSelection: string
}

export const u_init_state: UIState = {
  activeAction: '',
  activeSelection: ''
};

export function uiReducer(state = u_init_state, action) {

  switch(action.type){
    case ToolBoxActions.SELECT_ACTION:
      console.log("UI REDUCER", "Selecting action", action);

      state = Object.assign({}, state, {
        activeAction: action.body.action
      });
      break;

    case ToolBoxActions.SET_SELECTION_TYPE:
      console.log("UI REDUCER", "Selecting selection type", action);

      state = Object.assign({}, state, {
        activeSelection: action.body.selection
      });
      break;
  }
  return state;
}
