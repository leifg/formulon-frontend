import * as types from '../constants/ActionTypes'
import { extract } from 'formulon'

export function changeFormula (formula) {
  try {
    return {
      type: types.CHANGE_FORMULA,
      formula,
      identifiers: extract(formula)
    }
  } catch (err) {
    return {
      type: types.CHANGE_FORMULA,
      formula,
      identifiers: undefined
    }
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

export function changeIdentifierOptions (name, options) {
  return {
    type: types.CHANGE_IDENTIFIER_OPTIONS,
    payload: {
      name,
      options: {length: parseInt(options.length), scale: parseInt(options.scale)}
    }
  }
}
