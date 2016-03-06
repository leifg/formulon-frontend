import * as actions from '../../src/actions/IdentifierActions'
import * as types from '../../src/constants/ActionTypes'

import chai from 'chai';
const expect = chai.expect;

describe('actions', () => {
  it('creates an action to add identifier', () => {
    const name = 'pre__CustomField__c'
    const expectedAction = {
      type: types.ADD_IDENTIFIER,
      name
    }
    expect(actions.addIdentifier(name)).to.deep.eq(expectedAction)
  })
})
