import {
  ActionTypes
} from "./auth.actions";
import {IAuthState} from "./auth.models";


export const initialState: IAuthState = {
  loading: false,
  error: null,
  token: localStorage.getItem('access_token') ? JSON.parse((localStorage.getItem('access_token') as string)) : undefined,
};

export function reducer(state: IAuthState = initialState, action: any): IAuthState {
  switch (action.type) {
    case ActionTypes.LOGIN_ACTION:
      return {...state, loading: true, error: null};
    case ActionTypes.LOGIN_ACTION_SUCCESS:
      return {...state, loading: false, token: action.payload.token};
    case ActionTypes.LOGIN_ACTION_ERROR:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
}

// selectors
export const getToken = (state: IAuthState) => state.token;
