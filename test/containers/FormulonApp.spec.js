/* global describe it */

import FormulonApp from '../../src/containers/FormulonApp'
import React from 'react'
import TestUtils from 'react-addons-test-utils'

import configureStore from '../../src/configureStore'
const store = configureStore()

let jsdom = require('mocha-jsdom')

import chai from 'chai'
const expect = chai.expect

describe('FormulonApp', () => {
  jsdom()

  it('is visible', () => {
    const app = TestUtils.renderIntoDocument(<FormulonApp store={store}/>)
    expect(TestUtils.isCompositeComponent(app)).to.be.true
  })
})
