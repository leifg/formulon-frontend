import { ADD_IDENTIFIER } from '../constants/ActionTypes'

const initialState = [];

export default function identifiers(state = initialState, action) {
  switch (action.type) {
    case ADD_IDENTIFIER:
      return state.concat({
        name: action.name
      })

    default:
      return state
  }
}
