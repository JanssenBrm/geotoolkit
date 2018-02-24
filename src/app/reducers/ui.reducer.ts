import {ToolBoxActions} from "../actions/toolbox.action";

export interface UIState {
  activeAction: string;
}

export const u_init_state: UIState = {
  activeAction: ''
};

export function uiReducer(state = u_init_state, action) {

  switch(action.type){
    case ToolBoxActions.SELECT_ACTION:
      console.log("UI REDUCER", "Selecting action", action);

      state = Object.assign({}, state, {
        activeAction: action.body.action
      });
      break;
  }
  return state;
}
