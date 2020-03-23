import React from 'react'
import { shallow } from './enzyme'
import App from './App'
import FormulaInput from './components/FormulaInput'
import FormulaOutput from './components/FormulaOutput'
import IdentifierList from './components/IdentifierList'

describe('displaying of element', () => {
  test('Renders the Identifier List', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(IdentifierList)).toHaveLength(1)
  })

  test('Renders the Formula Input Box', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(FormulaInput)).toHaveLength(1)
  })

  test('Renders the Formula Output Box', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(FormulaOutput)).toHaveLength(1)
  })
})
