import * as types from '../constants/ActionTypes';

export function changeFormula(formula) {
  return {
    type: types.CHANGE_FORMULA,
    formula
  };
}
