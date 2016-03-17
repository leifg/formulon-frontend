import * as types from '../constants/ActionTypes';

export function changeFormula(formula) {
  return {
    type: types.CHANGE_FORMULA,
    formula
  };
}

export function changeIdentifier(name, value, dataType) {
  return {
    type: types.CHANGE_IDENTIFIER,
    payload: {
      name,
      value,
      dataType,
    }
  }
}
