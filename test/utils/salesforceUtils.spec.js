/* global context describe it */

import { availableDataTypes, defaultOptions, transformIdentifiers } from '../../src/utils/salesforceUtils'

import chai from 'chai'
const expect = chai.expect

describe('availableDataTypes', () => {
  const expected = [
    { id: 'number', label: 'Number' },
    { id: 'text', label: 'Text' },
    { id: 'checkbox', label: 'Checkbox' }
  ]

  it('returns the expexted data types', () => {
    expect(availableDataTypes).to.deep.eq(expected)
  })
})

describe('defaultOptions', () => {
  it('returns expected result for checkbox', () => {
    expect(defaultOptions('checkbox')).to.deep.eq({})
  })

  it('returns expected result for number', () => {
    expect(defaultOptions('number')).to.deep.eq({length: 8, scale: 0})
  })

  it('returns empty hash for unknown value', () => {
    expect(defaultOptions('weirdotype')).to.deep.eq({})
  })
})

describe('transformIdentifiers', () => {
  context('empty input', () => {
    it('returns empty object for empty array', () => {
      expect(transformIdentifiers([])).to.deep.eq({})
    })
  })

  context('undefined input', () => {
    it('returns empty object for empty array', () => {
      expect(transformIdentifiers(undefined)).to.deep.eq({})
    })
  })

  context('undefined checkbox', () => {
    const input = [
      {
        name: 'var1',
        value: undefined,
        dataType: 'checkbox'
      }
    ]

    const expectedOutput = {
      var1: {
        value: false,
        dataType: 'checkbox',
        options: {}
      }
    }

    it('returns expected output', () => {
      expect(transformIdentifiers(input)).to.deep.eq(expectedOutput)
    })
  })

  context('list of identifiers', () => {
    const input = [
      {
        name: 'var1',
        value: '1',
        dataType: 'number'
      },
      {
        name: 'var2',
        value: 'content',
        dataType: 'text'
      },
      {
        name: 'var3',
        value: true,
        dataType: 'checkbox'
      }
    ]

    const expectedOutput = {
      var1: {
        value: 1,
        dataType: 'number',
        options: {
          length: 8,
          scale: 0
        }
      },
      var2: {
        value: 'content',
        dataType: 'text',
        options: {}
      },
      var3: {
        value: true,
        dataType: 'checkbox',
        options: {}
      }
    }

    it('returns expected output', () => {
      expect(transformIdentifiers(input)).to.deep.eq(expectedOutput)
    })
  })
})
