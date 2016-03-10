import { CHANGE_FORMULA } from '../constants/ActionTypes'
import map from 'lodash/map'
import includes from 'lodash/includes'

const initialState = {
  formula: null,
  identifiers: {},
};

export default function formula(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORMULA:
      return {
        formula: action.formula,
        identifiers: []
      }
    default:
      return state
  }
}
