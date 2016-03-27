import * as types from '../constants/ActionTypes'

export function changeFormula (formula) {
  return {
    type: types.CHANGE_FORMULA,
    formula
  }
}

export function changeIdentifierValue (name, value) {
  return {
    type: types.CHANGE_IDENTIFIER_VALUE,
    payload: {
      name,
      value
    }
  }
}

export function changeIdentifierDataType (name, dataType) {
  return {
    type: types.CHANGE_IDENTIFIER_DATA_TYPE,
    payload: {
      name,
      dataType
    }
  }
}
