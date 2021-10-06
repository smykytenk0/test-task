import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './store.interfaces';

export const defaultSelector = createFeatureSelector<AppState>('store');
export const usersSelector = createSelector(defaultSelector, state => state.users);
export const questionsSelector = createSelector(defaultSelector, state => state.questions);
export const responsesSelector = createSelector(defaultSelector, state => state.responses);
