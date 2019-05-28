import {Observable, of, from} from 'rxjs';
import {mergeMap, catchError, map} from 'rxjs/operators';
import {combineEpics, ActionsObservable} from 'redux-observable';
import {Action} from 'redux';
import {IApplicationState} from '../root.reducer';
import {
  ActionTypes,
} from './auth.actions';
import {API} from "../../utils/httpRequests";


const loginEffect = (action$: ActionsObservable<Action>, store: IApplicationState) =>
  action$.ofType(ActionTypes.LOGIN_ACTION).pipe(
    mergeMap((action: any): Observable<any> => {
      // todo: any api call
      return from(API({
        method: 'post',
        url: '/login',
        data: action.payload
      })).pipe(
        map(res => {
          console.log('res', res);
          // if (res && res.access_token) {
          //   localStorage.setItem('access_token', JSON.stringify(res.access_token));
          // }
          // TODO: add token and redirect
          return {type: ActionTypes.LOGIN_ACTION_SUCCESS, payload: res}
        }),
        catchError(err => {
          console.error('err', err.response.data);
          return of({type: ActionTypes.LOGIN_ACTION_ERROR, payload: err.response.data});
        })
      )
    }),
  );

export const authEffects = combineEpics(
  loginEffect,
);
