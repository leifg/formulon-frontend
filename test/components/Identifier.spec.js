import Identifier from '../../src/components/Identifier'
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

let jsdom = require('mocha-jsdom');

import chai from 'chai';
const expect = chai.expect;

describe('Identifier', function() {
  jsdom();

  function setup(attributes)  {
    let renderer = TestUtils.createRenderer()
    renderer.render(<Identifier attributes={attributes} />)
    return renderer.getRenderOutput()
  }

  it("is visible", () => {
    const attributes = 'variable'
    const identifier = TestUtils.renderIntoDocument(<Identifier attributes={attributes} />)
    expect(TestUtils.isCompositeComponent(identifier)).to.be.true
  })

  it("sets attributes correctly", () => {
    let output = setup({name: "variable1"})
    console.log(output)
    expect(output.props.children[1]).to.equal("variable1")
  })
})
