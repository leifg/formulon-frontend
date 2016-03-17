import * as actions from '../../src/actions/IdentifierActions'

import chai from 'chai';
const expect = chai.expect;

describe('actions', () => {
  describe('#changeFormula', () => {
    it('creates an action to change formula', () => {
      const formula = '1 + 1'
      const expectedAction = {
        type: 'CHANGE_FORMULA',
        formula
      }
      expect(actions.changeFormula(formula)).to.deep.eq(expectedAction)
    })
  })

  describe('#changeIdentifier', () => {
    it('creates an action to change value', () => {
      const name = 'dev__CustomField__c'
      const value = '17'
      const dataType = 'number'
      const expectedAction = {
        type: 'CHANGE_IDENTIFIER',
        payload: {
          name,
          value,
          dataType,
        }
      }
      expect(actions.changeIdentifier(name, value, dataType)).to.deep.eq(expectedAction)
    })
  })
})
