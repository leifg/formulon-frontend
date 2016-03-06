import { ADD_IDENTIFIER } from '../constants/ActionTypes'
import map from 'lodash/map'
import includes from 'lodash/includes'

const initialState = [];

export default function identifiers(state = initialState, action) {
  switch (action.type) {
    case ADD_IDENTIFIER:
      if(includes(map(state, 'name'), action.name)) {
        return state
      }
      else {
        return state.concat({
          name: action.name
        })
      }

    default:
      return state
  }
}
