import { ActionReducerMap } from '@ngrx/store';

import * as fromHeroesListStore from './stores';

export interface AppState {
  heores: fromHeroesListStore.State;
}

export const reducers: ActionReducerMap<AppState> = {
  heores: fromHeroesListStore.heroesReducer
};

