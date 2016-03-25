/* global describe it */

import App from '../../src/containers/App'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

let jsdom = require('mocha-jsdom')

import chai from 'chai'
const expect = chai.expect

describe('App', () => {
  jsdom()

  it('is visible', () => {
    const app = TestUtils.renderIntoDocument(<App />)
    expect(TestUtils.isCompositeComponent(app)).to.be.true
  })
})
