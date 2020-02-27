import { transformIdentifiers } from './salesforceUtils'

describe('transformIdentifiers', () => {
  test('returns empty object for empty array', () => {
    expect(transformIdentifiers([])).toEqual({})
  })

  test('returns empty object for undefined input', () => {
    expect(transformIdentifiers(undefined)).toEqual({})
  })

  test('returns expected output for list of identifiers', () => {
    const input = [
      {
        name: 'var1',
        value: '1',
        dataType: 'number',
        options: {
          length: 4,
          scale: 0
        }
      },
      {
        name: 'var2',
        value: 'content',
        dataType: 'text',
        options: {
          length: 10
        }
      },
      {
        name: 'var3',
        value: true,
        dataType: 'checkbox',
        options: {}
      }
    ]

    const expectedOutput = {
      var1: {
        value: 1,
        dataType: 'number',
        options: {
          length: 4,
          scale: 0
        }
      },
      var2: {
        value: 'content',
        dataType: 'text',
        options: {
          length: 10
        }
      },
      var3: {
        value: true,
        dataType: 'checkbox',
        options: {}
      }
    }

    expect(transformIdentifiers(input)).toEqual(expectedOutput)
  })
})
