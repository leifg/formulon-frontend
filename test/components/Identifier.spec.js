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
    expect(identifierName.props.children).to.eq(name)
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

    it('is an input field', () => {
      const identifierName = renderer.getRenderOutput()
      expect(identifierName.type).to.eq('input')
      expect(identifierName.props.type).to.eq('text')
    })

    it('it has content set', () => {
      const identifierName = renderer.getRenderOutput()
      expect(identifierName.props.value).to.eq(value)
    })
  })

  context('text', () => {
    const dataType = 'text'
    const value = 'content'
    const renderer = TestUtils.createRenderer()

    beforeEach(() => {
      renderer.render(<IdentifierValue name={name} value={value} dataType={dataType}/>)
    })

    it('is an input field', () => {
      const identifierName = renderer.getRenderOutput()
      expect(identifierName.type).to.eq('input')
      expect(identifierName.props.type).to.eq('text')
    })

    it('it has content set', () => {
      const identifierName = renderer.getRenderOutput()
      expect(identifierName.props.value).to.eq(value)
    })
  })

  context('checkbox', () => {
    let dataType = 'checkbox'
    const value = 'true'
    const renderer = TestUtils.createRenderer()

    beforeEach(() => {
      renderer.render(<IdentifierValue name={name} value={value} dataType={dataType}/>)
    })

    it('is a checkbox field', () => {
      const identifierName = renderer.getRenderOutput()
      expect(identifierName.type).to.eq('input')
      expect(identifierName.props.type).to.eq('checkbox')
    })

    it('it has content set', () => {
      const identifierName = renderer.getRenderOutput()
      expect(identifierName.props.value).to.eq(value)
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

  it('is a selction field', () => {
    const identifierDataType = renderer.getRenderOutput()
    expect(identifierDataType.type).to.eq('select')
  })

  it('has expected options', () => {
    const identifierDataType = renderer.getRenderOutput()
    const options = identifierDataType.props.children.map((child) => {
      return child.props.value
    })
    expect(options).to.deep.eq(['number', 'text', 'checkbox'])
  })
})
