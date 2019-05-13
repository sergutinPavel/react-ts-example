import {
  ActionTypes
} from "./general.actions";
import {IGeneralState} from "./general.models";


export const initialState: IGeneralState = {
  expandSidebar: false,
  exampleData: [],
  loading: false,
  error: null
};

export function reducer(state: IGeneralState = initialState, action: any): IGeneralState {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR:
      return { ...state, expandSidebar: !state.expandSidebar };
    case ActionTypes.EXAMPLE_ACTION:
      return state;
    case ActionTypes.EXAMPLE_ACTION_SUCCESS:
      return {...state, exampleData: action.payload};
    default:
      return state;
  }
}

// selectors
// TODO: proper selectors
export const getExpandSidebar = (state: IGeneralState) => state.expandSidebar;
