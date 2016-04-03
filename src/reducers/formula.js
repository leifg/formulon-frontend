import * as types from '../constants/ActionTypes'

const initialState = {
  formula: null,
  identifiers: []
}

export default function formula (state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_FORMULA:
      if (action.identifiers == null) {
        return {
          formula: action.formula,
          identifiers: state.identifiers
        }
      }
      let identifiers = action.identifiers.map((identifier) => {
        let found = state.identifiers.find((x) => x.name === identifier)
        if (found) {
          return found
        }
        return {
          name: identifier
        }
      })
      return {
        formula: action.formula,
        identifiers: identifiers
      }
    case types.CHANGE_IDENTIFIER_VALUE:
    case types.CHANGE_IDENTIFIER_DATA_TYPE:
      let changedIdentifiers = state.identifiers.map((identifier) => {
        if (identifier.name === action.payload.name) {
          return Object.assign({}, identifier, action.payload)
        }
        return identifier
      })

      return Object.assign({}, state, {identifiers: changedIdentifiers})
    default:
      return state
  }
}
