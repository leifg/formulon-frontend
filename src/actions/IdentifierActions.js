import * as types from '../constants/ActionTypes';

export function addIdentifier(name) {
  return {
    type: types.ADD_IDENTIFIER,
    name
  };
}
