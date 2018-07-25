
import * as fromState from './state';
import * as ActionsTypes from './actions';


export function heroesReducer(state = fromState.initialState, action: ActionsTypes.Actions) {

  switch (action.type) {
    case ActionsTypes.LOAD_HEROES_REQUEST_ACTION:
      return {
        ...state
      };
    case ActionsTypes.LOAD_HEROES_SUCCES_ACTION:
      return {
        ...state,
        heroes: action.payload,
        isDeletingHero: false,
      };
    case ActionsTypes.DELETE_HERO_REQUEST_ACTION:
      return {
        ...state,
        isDeletingHero: true,
      };

    default:
      return state;
  }
}
