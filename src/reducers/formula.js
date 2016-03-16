import { CHANGE_FORMULA } from '../constants/ActionTypes'
import { extract } from "formulon"

const initialState = {
  formula: null,
  identifiers: [],
};

export default function formula(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORMULA:
      let identifiers = extract(action.formula).map((identifier)  => {
        return {
          name: identifier
        }
      })
      return {
        formula: action.formula,
        identifiers: identifiers
      }
    default:
      return state
  }
}
