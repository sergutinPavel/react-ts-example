import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {createSelector} from "reselect";
// IGeneralState
import {IGeneralState} from "./general/general.models";
import * as generalReducer from "./general/general.reducer";
// IAuthState
import {IAuthState} from "./auth/auth.models";
import * as authReducer from "./auth/auth.reducer";


export interface IApplicationState {
  readonly routing: any;
  readonly general: IGeneralState;
  readonly auth: IAuthState;
}

export default combineReducers<IApplicationState>({
  routing: routerReducer,
  general: generalReducer.reducer,
  auth: authReducer.reducer,
});

// selectors
// IGeneralState
export const getGeneralState = (state: IApplicationState) => state.general;
export const selectExpandSidebar = createSelector(getGeneralState, generalReducer.getExpandSidebar);
// IAuthState
export const getAuthState = (state: IApplicationState) => state.auth;
export const selectToken = createSelector(getAuthState, authReducer.getToken);
