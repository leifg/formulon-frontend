import { CHANGE_FORMULA } from '../constants/ActionTypes'
import Formulon from "../../../formulon/src/formulon"

const initialState = {
  formula: null,
  identifiers: {},
};

export default function formula(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORMULA:
      let identifiers = Formulon.extract(action.formula).reduce((agg, id)  => {
        return Object.assign({}, agg, {[id]: {}})
      }, state.identifiers)
      return {
        formula: action.formula,
        identifiers: identifiers
      }
    default:
      return state
  }
}
