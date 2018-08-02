import { Hero } from './../../../hero';

export interface State {
  heroes: Hero[];
  isDeletingHero: boolean;
  isLoading: boolean;
  isSavingHero: boolean;
}

export const initialState: State = {
  heroes: [],
  isDeletingHero: false,
  isLoading: false,
  isSavingHero: false,
};
