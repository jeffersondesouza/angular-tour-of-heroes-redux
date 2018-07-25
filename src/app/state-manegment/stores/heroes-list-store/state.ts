import { Hero } from './../../../hero';

export interface State {
  heroes: Hero[];
}

export const initialState: State = {
  heroes: []
};



