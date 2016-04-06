/* global context describe it */

import * as actions from '../../src/actions/IdentifierActions'

import chai from 'chai'
const expect = chai.expect

describe('actions', () => {
  describe('changeFormula', () => {
    context('no identifiers', () => {
      it('creates an action to change formula', () => {
        const formula = '1 + 1'
        const identifiers = []
        const expectedAction = {
          type: 'CHANGE_FORMULA',
          formula,
          identifiers
        }
        expect(actions.changeFormula(formula)).to.deep.eq(expectedAction)
      })
    })

    context('single identifier', () => {
      it('creates an action to change formula', () => {
        const formula = '1 + dev__CustomField__c'
        const identifiers = ['dev__CustomField__c']
        const expectedAction = {
          type: 'CHANGE_FORMULA',
          formula,
          identifiers
        }
        expect(actions.changeFormula(formula)).to.deep.eq(expectedAction)
      })
    })

    context('redundant identifiers', () => {
      it('creates an action to change formula', () => {
        const formula = '1 + dev__CustomField__c + dev__CustomField__c'
        const identifiers = ['dev__CustomField__c']
        const expectedAction = {
          type: 'CHANGE_FORMULA',
          formula,
          identifiers
        }
        expect(actions.changeFormula(formula)).to.deep.eq(expectedAction)
      })
    })

    context('parsing error', () => {
      it('creates an action to change formula', () => {
        const formula = '1 + dev__CustomField__c +'
        const identifiers = undefined
        const expectedAction = {
          type: 'CHANGE_FORMULA',
          formula,
          identifiers
        }
        expect(actions.changeFormula(formula)).to.deep.eq(expectedAction)
      })
    })
  })

  describe('changeIdentifierValue', () => {
    it('creates an action to change value', () => {
      const name = 'dev__CustomField__c'
      const value = '17'
      const expectedAction = {
        type: 'CHANGE_IDENTIFIER_VALUE',
        payload: {
          name,
          value
        }
      }
      expect(actions.changeIdentifierValue(name, value)).to.deep.eq(expectedAction)
    })
  })

  describe('changeIdentifierDataType', () => {
    it('creates an action to change data type', () => {
      const name = 'dev__CustomField__c'
      const dataType = 'number'
      const expectedAction = {
        type: 'CHANGE_IDENTIFIER_DATA_TYPE',
        payload: {
          name,
          dataType,
          options: { length: 8, scale: 0 }
        }
      }
      expect(actions.changeIdentifierDataType(name, dataType)).to.deep.eq(expectedAction)
    })
  })

  describe('changeIdentifierOptions', () => {
    it('creates an action to change options', () => {
      const name = 'dev__CustomField__c'
      const options = {length: '17', scale: '3'}
      const expectedAction = {
        type: 'CHANGE_IDENTIFIER_OPTIONS',
        payload: {
          name,
          options: { length: 17, scale: 3 }
        }
      }
      expect(actions.changeIdentifierOptions(name, options)).to.deep.eq(expectedAction)
    })
  })
})
