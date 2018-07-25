import { Hero } from './../../../hero';
import { Action } from '@ngrx/store';


export const LOAD_HEROES_REQUEST_ACTION = 'LOAD_HEROES_REQUEST_ACTION';

export class LoadHeroesRequesAction implements Action {
  readonly type = LOAD_HEROES_REQUEST_ACTION;
  constructor() { }
}

export type Actions = LoadHeroesRequesAction;
