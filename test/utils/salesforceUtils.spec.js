import { defaultMeta } from '../../src/utils/salesforceUtils'

import chai from 'chai';
const expect = chai.expect;

describe("defaultMeta", () => {
  it("returns expected result for checkbox", () => {
    expect(defaultMeta("checkbox")).to.deep.eq({})
  })

  it("returns expected result for number", () => {
    expect(defaultMeta("number")).to.deep.eq({length: 8, scale: 0})
  })

  it("returns empty hash for unknown value", () => {
    expect(defaultMeta("weirdotype")).to.deep.eq({})
  })
})
