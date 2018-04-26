import {ToolBoxActions} from "../actions/toolbox.action";
import {UIActions} from "../actions/ui.action";

export interface UIState {
  activeAction: string,
  activeSelection: string,
  calendarDates: any[],
  loadingTiles: number,
  loadedTiles: number,
  errorTiles: number
}

export const u_init_state: UIState = {
  activeAction: '',
  activeSelection: '',
  calendarDates: [],
  loadingTiles: 0,
  loadedTiles: 0,
  errorTiles: 0,
};

export function uiReducer(state = u_init_state, action) {

  switch(action.type){
    case ToolBoxActions.SELECT_ACTION:
      console.log("UI REDUCER", "Selecting action", action);

      state = Object.assign({}, state, {
        activeAction: action.body.action
      });
      break;
    case ToolBoxActions.STOP_ACTION:
      console.log("UI REDUCER", "Stopping current action", action);

      state = Object.assign({}, state, {
        activeSelection: null
      });
      break;

    case ToolBoxActions.SET_SELECTION_TYPE:
      console.log("UI REDUCER", "Selecting selection type", action);

      state = Object.assign({}, state, {
        activeSelection: action.body.selection
      });
      break;

    case UIActions.SET_CALENDAR_DATES:

      console.log("UI REDUCER", "Setting calendar dates", action);

      let calendarDates = [];

      action.body.times.forEach(timeSeries =>{
        calendarDates = calendarDates.concat(timeSeries.map(time => {

          const d = new Date(time)
          const month = d.getMonth() + 1;
          const day = d.getDate();
          const date = d.getFullYear() + "-" + ( month < 10 ? '0' : '') + month + "-" + (day < 10 ? '0' : '') + day;

          return date;
        }));
      });

      calendarDates = Array.from(new Set(calendarDates));
      calendarDates.sort((a,b)=> {
        return (a < b) ? -1 : (a > b) ? 1 : 0;
      });


      state = Object.assign({}, state ,{
        calendarDates: calendarDates
      });

      break;

    case UIActions.SET_PROGRESS:

      console.log("UI REDUCER", "Set progress", action);

      let loadedTiles = state.loadedTiles;
      let loadingTiles = state.loadingTiles;
      let errorTiles = state.errorTiles;

      if(action.body.tileLoading){
        loadingTiles++;
      }
      if(action.body.tileLoaded){
        loadedTiles++;
      }
      if(action.body.tileError){
        errorTiles++;
      }

      state = Object.assign({}, state, {
        loadedTiles: loadedTiles,
        loadingTiles: loadingTiles,
        errorTiles: errorTiles
      });

      break;

    case UIActions.RESET_PROGRESS:

      console.log("UI REDUCER", "Reset progress", action);

      state = Object.assign({}, state, {
        loadedTiles: 0,
        loadingTiles: state.loadingTiles - state.loadedTiles,
        errorTiles: 0
      });


      break;
  }
  return state;
}
