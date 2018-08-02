import { LOAD_HERO_REQUEST_ACTION, LOAD_HERO_SUCCESS_ACTION } from './../actions/index';

import * as fromState from './../state';
import * as ActionsTypes from './../actions';


export function heroesReducer(state = fromState.initialState, action: ActionsTypes.Actions) {
  console.log({
    state,
    action
  });

  switch (action.type) {
    case ActionsTypes.LOAD_REQUEST_ACTION:
      return {
        ...state,
        isLoading: true
      };
    case ActionsTypes.LOAD_SUCCESS_ACTION:
      return {
        ...state,
        heroes: action.payload,
        isLoading: false,
        isDeletingHero: false,
      };
    case ActionsTypes.LOAD_FAILURE_ACTION:
      return {
        ...state,
        isLoading: false,
        isDeletingHero: false,
      };
    case ActionsTypes.DELETE_REQUEST_ACTION:
      return {
        ...state,
        isDeletingHero: true,
      };
    case ActionsTypes.DELETE_SUCCESS_ACTION:
      return {
        ...state,
        isDeletingHero: false,
      };
    case ActionsTypes.DELETE_FAILURE_ACTION:
      return {
        ...state,
        isDeletingHero: false,
      };

    case ActionsTypes.CREATE_HERO_REQUEST_ACTION:
      return {
        ...state,
        isSavingHero: true
      };

    case ActionsTypes.CREATE_HERO_SUCCESS_ACTION:
      return {
        ...state,
        isSavingHero: false
      };

    case ActionsTypes.CREATE_HERO_FAILURE_ACTION:
      return {
        ...state,
        isSavingHero: false
      };

    case ActionsTypes.LOAD_HERO_REQUEST_ACTION:
      return {
        ...state,
        selectedHero: null
      };
    case ActionsTypes.LOAD_HERO_SUCCESS_ACTION:
      return {
        ...state,
        selectedHero: action.payload
      };
    case ActionsTypes.LOAD_HERO_FAILURE_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
}
