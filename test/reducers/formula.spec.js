/* global describe it context */

import reducer from '../../src/reducers/formula'

import chai from 'chai'
const expect = chai.expect

describe('formula reducer', () => {
  context('CHANGE_FORMULA', () => {
    const initialState = {
      identifiers: []
    }

    context('no identifiers', () => {
      const action = {
        type: 'CHANGE_FORMULA',
        formula: '1 + 1'
      }

      it('changes the formula', () => {
        const expected = {
          formula: '1 + 1',
          identifiers: []
        }

        expect(reducer(undefined, action)).to.deep.eq(expected)
      })

      it('does not change original input', () => {
        const action = {
          type: 'CHANGE_FORMULA',
          formula: '1 + 1'
        }

        const expected = {
          identifiers: []
        }

        reducer(initialState, action)
        expect(initialState).to.deep.eq(expected)
      })
    })

    context('identifiers used', () => {
      const action = {
        type: 'CHANGE_FORMULA',
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

      it('does not overwrite existing identifier values', () => {
        const state = {
          formula: 'dev__CustomField__c + 1',
          identifiers: [
            {
              name: 'dev__CustomField__c',
              value: '2',
              dataType: 'int'
            }
          ]
        }

        const expected = {
          formula: 'dev__CustomField__c + dev__CustomField__c',
          identifiers: [
            {
              name: 'dev__CustomField__c',
              value: '2',
              dataType: 'int'
            }
          ]
        }

        const action = {
          type: 'CHANGE_FORMULA',
          formula: 'dev__CustomField__c + dev__CustomField__c'
        }

        expect(reducer(state, action)).to.deep.eq(expected)
      })

      it('does not change original input', () => {
        const expected = {
          identifiers: []
        }

        reducer(initialState, action)
        expect(initialState).to.deep.eq(expected)
      })
    })
  })
  context('CHANGE_IDENTIFIER', () => {
    const globalAction = {
      type: 'CHANGE_IDENTIFIER',
      payload: {
        name: 'dev__CustomField__c'
      }
    }

    const state = {
      formula: 'dev__CustomField__c + 1',
      identifiers: [
        {
          name: 'dev__CustomField__c'
        }
      ]
    }

    context('change value', () => {
      let payload = Object.assign({}, globalAction.payload, { value: '17' })
      let action = Object.assign({}, globalAction, { payload: payload })

      it('correctly sets value of unitialized variable', () => {
        const expected = {
          formula: 'dev__CustomField__c + 1',
          identifiers: [
            {
              name: 'dev__CustomField__c',
              value: '17'
            }
          ]
        }

        expect(reducer(state, action)).to.deep.eq(expected)
      })

      it('correctly replaces value of initialized variable', () => {
        const prevState = Object.assign(
          {},
          state,
          { identifiers: [ { name: 'dev__CustomField__c', value: '19' } ] }
        )

        const expected = {
          formula: 'dev__CustomField__c + 1',
          identifiers: [
            {
              name: 'dev__CustomField__c',
              value: '17'
            }
          ]
        }

        expect(reducer(prevState, action)).to.deep.eq(expected)
      })

      it('leaves existing type untouched', () => {
        const prevState = Object.assign(
          {},
          state,
          { identifiers: [ { name: 'dev__CustomField__c', dataType: 'string' } ] }
        )

        const expected = {
          formula: 'dev__CustomField__c + 1',
          identifiers: [
            {
              name: 'dev__CustomField__c',
              dataType: 'string',
              value: '17'
            }
          ]
        }

        expect(reducer(prevState, action)).to.deep.eq(expected)
      })
    })

    context('change dataType', () => {
      let payload = Object.assign({}, globalAction.payload, { dataType: 'number' })
      let action = Object.assign({}, globalAction, { payload: payload })

      it('correctly sets type of unitialized variable', () => {
        const expected = {
          formula: 'dev__CustomField__c + 1',
          identifiers: [
            {
              name: 'dev__CustomField__c',
              dataType: 'number'
            }
          ]
        }

        expect(reducer(state, action)).to.deep.eq(expected)
      })

      it('correctly replaces type of initialized variable', () => {
        const prevState = Object.assign(
          {},
          state,
          { identifiers: [ { name: 'dev__CustomField__c', dataType: 'string' } ] }
        )

        const expected = {
          formula: 'dev__CustomField__c + 1',
          identifiers: [
            {
              name: 'dev__CustomField__c',
              dataType: 'number'
            }
          ]
        }

        expect(reducer(prevState, action)).to.deep.eq(expected)
      })

      it('leaves existing value untouched', () => {
        const prevState = Object.assign(
          {},
          state,
          { identifiers: [ { name: 'dev__CustomField__c', value: '17' } ] }
        )

        const expected = {
          formula: 'dev__CustomField__c + 1',
          identifiers: [
            {
              name: 'dev__CustomField__c',
              dataType: 'number',
              value: '17'
            }
          ]
        }

        expect(reducer(prevState, action)).to.deep.eq(expected)
      })
    })
  })

  context('unsupported action', () => {
    it('returns input', () => {
      const prevState = 'state'
      const initialState = 'state'

      const action = {
        type: 'SOMETHING_WEIRD',
        value: '1 + 1'
      }

      expect(reducer(prevState, action)).to.deep.eq(initialState)
    })
  })
})
