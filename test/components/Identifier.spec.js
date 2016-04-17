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
    dataType: 'number',
    options: {
      length: 8,
      scale: 0,
    }
  }

  it('is a Row', () => {
    renderer.render(<Identifier attributes={attributes}/>)
    const identifier = renderer.getRenderOutput()
    expect(identifier.type.name).to.eq('Row')
  })
})
