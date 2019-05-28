import {action} from 'typesafe-actions';

export enum ActionTypes {
  LOGIN_ACTION = '[auth] LOGIN_ACTION',
  LOGIN_ACTION_SUCCESS = '[auth] LOGIN_ACTION_SUCCESS',
  LOGIN_ACTION_ERROR = '[auth] LOGIN_ACTION_ERROR'
}

export const LoginAction = (payload?: any) => {
  return action(ActionTypes.LOGIN_ACTION, payload);
};
export const LoginActionSuccess = (payload?: any) => {
  return action(ActionTypes.LOGIN_ACTION_SUCCESS, payload);
};
export const LoginActionFail = (payload?: any) => {
  return action(ActionTypes.LOGIN_ACTION_ERROR, payload);
};
