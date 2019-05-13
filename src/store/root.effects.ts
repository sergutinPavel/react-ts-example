// import { combineEpics, ActionsObservable } from 'redux-observable';
import { combineEpics } from 'redux-observable';
import { generalEffects } from './general/general.effects';

export const rootEffects = combineEpics(generalEffects);
