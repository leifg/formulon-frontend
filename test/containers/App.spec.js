import App from '../../src/containers/App'
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

let jsdom = require('mocha-jsdom');

import chai from 'chai';
const expect = chai.expect;

describe('App', function() {
  jsdom();

  it("is visible", () => {
    const app = TestUtils.renderIntoDocument(<App />);
    const appNode = ReactDOM.findDOMNode(app);
    expect(TestUtils.isCompositeComponent(app)).to.be.true;
  })
})
