import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../../environments/environment';
import { starterReducer } from './starter/starter.reducer';
import { IStarter } from './starter/starter.model';

// Starter reducers should be define here
export interface IStarterState {
  starter: IStarter;
}

// all new reducers should be define here
export const reducers: ActionReducerMap<IStarterState> = {
  starter: starterReducer,
};

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<IStarterState>[] = !environment.production ? [storeFreeze] : [];

export const getStarterStates = createFeatureSelector<IStarterState>('starter');

export const getStarterState = createSelector(
  getStarterStates,
  (state: IStarterState) => (state && state.hasOwnProperty('starter')) ? state.starter : {}
);
