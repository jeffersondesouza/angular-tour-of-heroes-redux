import { Hero } from './../../../hero';
import { Action } from '@ngrx/store';


export const LOAD_HEROES_REQUEST_ACTION = 'LOAD_HEROES_REQUEST_ACTION';
export const LOAD_HEROES_SUCCES_ACTION = 'LOAD_HEROES_SUCCES_ACTION';

export class LoadHeroesRequesAction implements Action {
  readonly type = LOAD_HEROES_REQUEST_ACTION;
  constructor() { }
}

export class LoadHeroesSuccesAction implements Action {
  readonly type = LOAD_HEROES_SUCCES_ACTION;
  constructor(public payload: Hero[]) { }
}

export type Actions =
  LoadHeroesRequesAction
  | LoadHeroesSuccesAction;
