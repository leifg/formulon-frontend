import * as types from '../../src/constants/ActionTypes'
import reducer from '../../src/reducers/formula'
import { CHANGE_FORMULA } from '../../src/constants/ActionTypes'

import chai from 'chai';
const expect = chai.expect;

describe('formula reducer', () => {
  context('no identifiers', () => {
    const action = {
      type: CHANGE_FORMULA,
      formula: '1 + 1'
    }

    const initialState = {
      formula: null,
      identifiers: [],
    }

    it('changes the formula', () => {
      const expected = {
        formula: '1 + 1',
        identifiers: []
      }

      expect(reducer(initialState, action)).to.deep.eq(expected)
    })

    it('does not change original input', () => {
      const action = {
        type: CHANGE_FORMULA,
        value: "1 + 1"
      }

      const expected = {
        formula: null,
        identifiers: []
      }

      expect(initialState).to.deep.eq(expected)
    })
  })
})
