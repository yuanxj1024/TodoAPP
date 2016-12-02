import * as types from '../constants/ActionTypes';

export default function (state = {
  index: 0,
}, action = {}) {
  switch (acton.type) {
    case types.SWITCH_MAIN_TAB:
      return {...state,
        index: action.index
      };
  }
  return state;
}
