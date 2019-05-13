import {action} from 'typesafe-actions'

export enum ActionTypes {
  TOGGLE_SIDEBAR = '[general] TOGGLE_SIDEBAR',
  EXAMPLE_ACTION = '[general] EXAMPLE_ACTION',
  EXAMPLE_ACTION_SUCCESS = '[general] EXAMPLE_ACTION_SUCCESS',
  EXAMPLE_ACTION_ERROR = '[general] EXAMPLE_ACTION_ERROR'
}

export const ToggleSidebarAction = (payload?: boolean) => {
  return action(ActionTypes.TOGGLE_SIDEBAR, payload);
};
export const ExampleAction = (payload?: any) => {
  return action(ActionTypes.EXAMPLE_ACTION, payload);
};
export const ExampleActionSuccess = (payload?: any) => {
  return action(ActionTypes.EXAMPLE_ACTION_SUCCESS, payload);
};
export const ExampleActionFail = (payload?: any) => {
  return action(ActionTypes.EXAMPLE_ACTION_ERROR, payload);
};
