import { Hero } from './../../../hero';

export interface State {
  heroes: Hero[];
  isDeletingHero: boolean;
}

export const initialState: State = {
  heroes: [],
  isDeletingHero: false,
};



