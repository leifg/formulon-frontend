/* global describe it context */

import Identifier, { IdentifierName } from '../../src/components/Identifier'
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'

let jsdom = require('mocha-jsdom')

import chai from 'chai'
const expect = chai.expect

describe('Identifier', () => {
  jsdom()

  context('default state', () => {
    const attributes = {}

    it('renders dataType number', () => {
      const identifier = TestUtils.renderIntoDocument(<Identifier attributes={attributes}/>)
      expect(identifier.props.attributes.dataType).to.eq('number')
    })
  })

  context('number', () => {
    const attributes = {
      dataType: 'number'
    }

    it('has options set to default', () => {
      const identifier = TestUtils.renderIntoDocument(<Identifier attributes={attributes}/>)
      expect(identifier.props.attributes.options).to.deep.eq({ length: 8, scale: 0 })
    })
  })

  describe('IdentifierName', () => {
    const name = 'lg__testName__c'

    it('shows name', () => {
      const identifierName = TestUtils.renderIntoDocument(<IdentifierName name={name}/>)
      expect(identifierName.props.name).to.eq(name)
    })
  })
})
