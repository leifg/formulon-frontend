import * as actions from '../../src/actions/IdentifierActions'
import * as types from '../../src/constants/ActionTypes'

import chai from 'chai';
const expect = chai.expect;

describe('actions', () => {
  it('creates an action to change formula', () => {
    const formula = '1 + 1'
    const expectedAction = {
      type: types.CHANGE_FORMULA,
      formula
    }
    expect(actions.changeFormula(formula)).to.deep.eq(expectedAction)
  })
})
