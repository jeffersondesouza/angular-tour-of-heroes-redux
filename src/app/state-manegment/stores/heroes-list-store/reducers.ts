
import * as fromState from './state';
import * as ActionsTypes from './actions';


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
    default:
      return state;
  }
}
