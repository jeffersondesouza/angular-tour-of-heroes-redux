import { Hero } from './../../../hero';
import { Action } from '@ngrx/store';


export const LOAD_HEROES = 'LOAD_HEROES';

export class LoadHeroesAction implements Action {
  readonly type = LOAD_HEROES;
  constructor(public payload: Hero[]) { }
}

export type Actions = LoadHeroesAction;
