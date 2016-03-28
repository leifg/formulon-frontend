/* global describe it beforeEach */

import Identifier, { IdentifierName } from '../../src/components/Identifier'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

let jsdom = require('mocha-jsdom')

import chai from 'chai'
const expect = chai.expect

describe('Identifier', () => {
  const renderer = TestUtils.createRenderer()
  jsdom()

  const attributes = {
    dataType: 'number'
  }

  it('is a table row', () => {
    renderer.render(<Identifier attributes={attributes}/>)
    const identifier = renderer.getRenderOutput()
    expect(identifier.type).to.eq('tr')
  })

  it('contains 3 table cells', () => {
    renderer.render(<Identifier attributes={attributes}/>)
    const identifier = renderer.getRenderOutput()
    expect(identifier.props.children.map((child) => { return child.type })).to.deep.eq(['td', 'td', 'td'])
  })
})

describe('IdentifierName', () => {
  const name = 'lg__testName__c'
  const renderer = TestUtils.createRenderer()

  beforeEach(() => {
    renderer.render(<IdentifierName name={name} />)
  })

  it('is wrapped in <strong>', () => {
    const identifierName = renderer.getRenderOutput()
    expect(identifierName.type).to.eq('strong')
  })

  it('contains only name', () => {
    const identifierName = renderer.getRenderOutput()
    console.log(identifierName.props.children)
    expect(identifierName.props.children).to.eq(name)
  })
})
