
import * as fromState from './state';
import * as ActionsTypes from './actions';


export function heroesReducer(state = fromState.initialState, action: ActionsTypes.Actions) {
  console.log(state, action);

  switch (action.type) {
    case ActionsTypes.LOAD_HEROES:

      return {
        ...state
      };
    default:
      return state;
  }
}
