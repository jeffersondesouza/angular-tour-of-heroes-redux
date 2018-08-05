import { State } from '../state';

export const selectAllHeroes = (state) => state.heroes.heroes;

export const selectFirstsHeroes = (state) => state.heroes.heroes.slice(1, 5);
