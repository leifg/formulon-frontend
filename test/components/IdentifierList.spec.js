import IdentifierList from '../../src/components/IdentifierList'
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

let jsdom = require('mocha-jsdom');

import chai from 'chai';
const expect = chai.expect;

describe('IdentifierList', function() {
  jsdom();

  function setup(identifiers=[])  {
    let renderer = TestUtils.createRenderer()
    renderer.render(<IdentifierList identifiers={identifiers} />)
    return renderer.getRenderOutput()
  }

  it("is visible", () => {
    const list = TestUtils.renderIntoDocument(<IdentifierList identifiers={[]} />)
    expect(TestUtils.isCompositeComponent(list)).to.be.true
  })

  it("renders single identifier correctly", () => {
    let output = setup(["variable1"])
    expect(output.props.children.length).to.equal(1)
  })

  it("renders list of identifiers correctly", () => {
    let output = setup(["variable1", "variable2"])
    expect(output.props.children.length).to.equal(2)
  })
})
