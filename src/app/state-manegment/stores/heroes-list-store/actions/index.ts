import { Action } from '@ngrx/store';

import { Hero } from './../../../../hero';

export const LOAD_REQUEST_ACTION = '[Heroes List] LOAD_REQUEST_ACTION';
export const LOAD_FAILURE_ACTION = '[Heroes List] LOAD_FAILURE_ACTION';
export const LOAD_SUCCESS_ACTION = '[Heroes List] LOAD_SUCCESS_ACTION';

export const LOAD_HERO_REQUEST_ACTION = '[Heroes List] LOAD_HERO_REQUEST_ACTION';
export const LOAD_HERO_FAILURE_ACTION = '[Heroes List] LOAD_HERO_FAILURE_ACTION';
export const LOAD_HERO_SUCCESS_ACTION = '[Heroes List] LOAD_HERO_SUCCESS_ACTION';


export const DELETE_REQUEST_ACTION = '[Heroes List] DELETE_REQUEST_ACTION';
export const DELETE_FAILURE_ACTION = '[Heroes List] DELETE_FAILURE_ACTION';
export const DELETE_SUCCESS_ACTION = '[Heroes List] DELETE_SUCCESS_ACTION';

export const CREATE_HERO_REQUEST_ACTION = '[Heroes List] CREATE_HERO_REQUEST_ACTION';
export const CREATE_HERO_FAILURE_ACTION = '[Heroes List] CREATE_HERO_FAILURE_ACTION';
export const CREATE_HERO_SUCCESS_ACTION = '[Heroes List] CREATE_HERO_SUCCESS_ACTION';

export const UPDATE_HERO_REQUEST_ACTION = '[Heroes List] UPDATE_HERO_REQUEST_ACTION';
export const UPDATE_HERO_FAILURE_ACTION = '[Heroes List] UPDATE_HERO_FAILURE_ACTION';
export const UPDATE_HERO_SUCCESS_ACTION = '[Heroes List] UPDATE_HERO_SUCCESS_ACTION';



export class LoadHeroesRequesAction implements Action {
  readonly type = LOAD_REQUEST_ACTION;
  constructor() { }
}

export class LoadHeroesSuccesAction implements Action {
  readonly type = LOAD_SUCCESS_ACTION;
  constructor(public payload: Hero[]) { }
}

export class LoadHeroesFailureAction implements Action {
  readonly type = LOAD_FAILURE_ACTION;
  constructor(public payload: { error }) { }
}


export class LoadHeroRequesAction implements Action {
  readonly type = LOAD_HERO_REQUEST_ACTION;
  /**
   * @param payload hero id
   */
  constructor(public payload: number) { }
}

export class LoadHeroSuccesAction implements Action {
  readonly type = LOAD_HERO_SUCCESS_ACTION;
  constructor(public payload: Hero) { }
}

export class LoadHeroFailureAction implements Action {
  readonly type = LOAD_HERO_FAILURE_ACTION;
  constructor(public payload: { error }) { }
}

export class CreateHeroRequestAction implements Action {
  readonly type = CREATE_HERO_REQUEST_ACTION;
}

export class CreateHeroSuccessAction implements Action {
  readonly type = CREATE_HERO_FAILURE_ACTION;
}

export class CreateHeroFailureAction implements Action {
  readonly type = CREATE_HERO_SUCCESS_ACTION;
}

export class DeleteHeroRequestAction implements Action {
  readonly type = DELETE_REQUEST_ACTION;
  constructor(public payload: Hero) { }
}

export class DeleteSuccessAction implements Action {
  readonly type = DELETE_SUCCESS_ACTION;
}

export class DeleteFailureAction implements Action {
  readonly type = DELETE_FAILURE_ACTION;
  constructor(public payload: { error }) { }
}



export class UpdateHeroRequestAction implements Action {
  readonly type = UPDATE_HERO_REQUEST_ACTION;
  /**
   * @param payload hero to update
   */
  constructor(public payload: Hero) { }
}

export class UpdateHeroSuccessAction implements Action {
  readonly type = UPDATE_HERO_SUCCESS_ACTION;
}

export class UpdateHeroFailureAction implements Action {
  readonly type = UPDATE_HERO_FAILURE_ACTION;
  constructor(public payload: { error }) { }
}

export type Actions =
  LoadHeroesRequesAction
  | LoadHeroesSuccesAction
  | LoadHeroesFailureAction
  | DeleteHeroRequestAction
  | DeleteSuccessAction
  | DeleteFailureAction
  | CreateHeroRequestAction
  | CreateHeroSuccessAction
  | CreateHeroFailureAction
  | LoadHeroRequesAction
  | LoadHeroSuccesAction
  | LoadHeroFailureAction
  | UpdateHeroRequestAction
  | UpdateHeroSuccessAction
  | UpdateHeroFailureAction;
