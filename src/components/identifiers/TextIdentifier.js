import React from 'react'
import FormElement from '../lightning/FormElement'
import { Input } from '@salesforce/design-system-react'

const TextIdentifier = ({name, value, options, dispatch, formula, allIdentifers}) => {
  return (
    <>
      <FormElement sizeLarge={6} sizeMedium={6} sizeSmall={12} sizeMax={12}>
        <Input
          type='text'
          id={ `${name}-value` }
          value={value}
          label="Value"
          onChange={ (event) => { dispatch({type: 'REQUEST_IDENTIFIER_VALUE_CHANGE', name: name, value: event.target.value}) } }/>
      </FormElement>
      <FormElement sizeLarge={2} sizeMax={12} sizeSmall={12}>
        <Input
          type='number'
          id={ `${name}-option-length` }
          value={options.length}
          label="Length"
          onChange={ (event) => { dispatch({type: 'REQUEST_IDENTIFIER_OPTIONS_CHANGE', name: name, value: { length: parseInt(event.target.value) }}) } }/>
      </FormElement>
    </>
  )
}

export default TextIdentifier
