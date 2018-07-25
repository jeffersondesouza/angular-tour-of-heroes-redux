import { ActionReducerMap } from '@ngrx/store';

import * as fromHeroesListStore from './stores';

export interface AppState {
  heroes: fromHeroesListStore.State;
}

export const reducers: ActionReducerMap<AppState> = {
  heroes: fromHeroesListStore.heroesReducer
};

export const effects = [
  fromHeroesListStore.HeroListEffectsService
];

