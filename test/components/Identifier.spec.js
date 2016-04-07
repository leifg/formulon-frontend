/* global describe it beforeEach */

import Identifier, { IdentifierName, IdentifierValue, IdentifierDataType } from '../../src/components/Identifier'
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

  it('is a FieldSet', () => {
    renderer.render(<Identifier attributes={attributes}/>)
    const identifier = renderer.getRenderOutput()
    expect(identifier.type.name).to.eq('FieldSet')
  })

  it('contains 1 Row', () => {
    renderer.render(<Identifier attributes={attributes}/>)
    const identifier = renderer.getRenderOutput()
    const children = identifier.props.children
    expect(children.type.name).to.eq('Row')
  })
})

describe('IdentifierValue', () => {
  const name = 'lg__testName__c'
  const renderer = TestUtils.createRenderer()

  context('number', () => {
    const dataType = 'number'
    const value = 'content'
    const renderer = TestUtils.createRenderer()

    beforeEach(() => {
      renderer.render(<IdentifierValue name={name} value={value} dataType={dataType}/>)
    })

    it('is a FieldSet', () => {
      const identifierName = renderer.getRenderOutput()
      expect(identifierName.type.name).to.eq('FieldSet')
    })
  })

  context('text', () => {
    const dataType = 'text'
    const value = 'content'
    const renderer = TestUtils.createRenderer()

    beforeEach(() => {
      renderer.render(<IdentifierValue name={name} value={value} dataType={dataType}/>)
    })

    it('is a FieldSet', () => {
      const identifierName = renderer.getRenderOutput()
      expect(identifierName.type.name).to.eq('FieldSet')
    })
  })

  context('checkbox', () => {
    let dataType = 'checkbox'
    const value = 'true'
    const renderer = TestUtils.createRenderer()

    beforeEach(() => {
      renderer.render(<IdentifierValue name={name} value={value} dataType={dataType}/>)
    })

    it('is a FieldSet', () => {
      const identifierName = renderer.getRenderOutput()
      expect(identifierName.type.name).to.eq('FieldSet')
    })
  })
})

describe('IdentifierDataType', () => {
  const name = 'lg__testName__c'
  const value = 'text'
  const renderer = TestUtils.createRenderer()

  beforeEach(() => {
    renderer.render(<IdentifierDataType name={name} value={value} />)
  })

  it('is a FieldSet', () => {
    const identifierDataType = renderer.getRenderOutput()
    expect(identifierDataType.type.name).to.eq('FieldSet')
  })
})
