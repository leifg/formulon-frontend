import * as types from '../../src/constants/ActionTypes'
import reducer from '../../src/reducers/formula'
import { CHANGE_FORMULA } from '../../src/constants/ActionTypes'

import chai from 'chai';
const expect = chai.expect;

describe('formula reducer', () => {
  context('CHANGE_FORMULA', () => {
    const initialState = {
      identifiers: [],
    }

    context('no identifiers', () => {
      const action = {
        type: CHANGE_FORMULA,
        formula: '1 + 1'
      }

      it('changes the formula', () => {
        const expected = {
          formula: '1 + 1',
          identifiers: [],
        }

        expect(reducer(undefined, action)).to.deep.eq(expected)
      })

      it('does not change original input', () => {
        const action = {
          type: CHANGE_FORMULA,
          formula: "1 + 1"
        }

        const expected = {
          identifiers: [],
        }

        reducer(initialState, action)
        expect(initialState).to.deep.eq(expected)
      })
    })

    context('identifiers used', () => {
      const action = {
        type: CHANGE_FORMULA,
        formula: 'dev__CustomField__c + 1'
      }

      it('changes the formula and identifiers', () => {
        const expected = {
          formula: 'dev__CustomField__c + 1',
          identifiers: [
            {
              name: 'dev__CustomField__c'
            }
          ]
        }

        expect(reducer(initialState, action)).to.deep.eq(expected)
      })

      it('does not change original input', () => {
        const expected = {
          identifiers: [],
        }

        reducer(initialState, action)
        expect(initialState).to.deep.eq(expected)
      })
    })
  })

  context('unsupported action', () => {
    it("returns input", () => {
      const initialState = "state"

      const action = {
        type: "SOMETHING_WEIRD",
        value: "1 + 1"
      }

      expect(initialState).to.deep.eq(initialState)
    })
  })
})
