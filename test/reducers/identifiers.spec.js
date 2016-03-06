import * as types from '../../src/constants/ActionTypes'
import reducer from '../../src/reducers/identifiers'
import { ADD_IDENTIFIER } from '../../src/constants/ActionTypes'

import chai from 'chai';
const expect = chai.expect;

describe('identifiers reducer', () => {
  it('adds an action to identifiers', () => {
    const action = {
      type: ADD_IDENTIFIER,
      name: 'pre__CustomField__c'
    }

    const expected = [{name: 'pre__CustomField__c'}]

    expect(reducer([], action)).to.deep.eq(expected)
  })

  it('does not change original input', () => {
    const action = {
      type: ADD_IDENTIFIER,
      name: 'pre__CustomField__c'
    }

    const input = []
    const expected = [{name: 'pre__CustomField__c'}]

    reducer(input, action)
    expect(input).to.deep.eq([])
  })
})
