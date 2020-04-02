import React from 'react'
import FormElement from '../lightning/FormElement'
import { Input } from '@salesforce/design-system-react'

const NumberIdentifier = ({name, value, options, dispatch, ...props}) => {
  return (
    <>
      <FormElement sizeLarge={4}  sizeMedium={12} sizeSmall={12} sizeMax={12}>
        <Input
          type='number'
          id={ `${name}-value` }
          value={value}
          label='Value'
          onChange={ (event) => { dispatch({type: 'REQUEST_IDENTIFIER_VALUE_CHANGE', name: name, value: parseFloat(event.target.value)}) } }/>
      </FormElement>
      <FormElement sizeLarge={2}  sizeMedium={12} sizeSmall={6} sizeMax={12}>
        <Input
          type='number'
          id={ `${name}-option-length` }
          value={options.length}
          label='Length'
          onChange={ (event) => { dispatch({type: 'REQUEST_IDENTIFIER_OPTIONS_CHANGE', name: name, value: { ...options, length: parseInt(event.target.value) }}) } }/>
      </FormElement>
      <FormElement sizeLarge={2}  sizeMedium={12} sizeSmall={6} sizeMax={12}>
        <Input
          type='number'
          id={ `${name}-option-scale` }
          value={options.scale} label='Scale'
          onChange={ (event) => { dispatch({type: 'REQUEST_IDENTIFIER_OPTIONS_CHANGE', name: name, value: { ...options, scale: parseInt(event.target.value) }}) } }/>
      </FormElement>
    </>
  )
}

export default NumberIdentifier
