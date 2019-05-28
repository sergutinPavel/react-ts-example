// import { combineEpics, ActionsObservable } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { generalEffects } from './general/general.effects';
import { authEffects } from "./auth/auth.effects";

export const rootEffects = combineEpics(
  generalEffects,
  authEffects,
);
