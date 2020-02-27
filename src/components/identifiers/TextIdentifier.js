import React from 'react';
import FormElement from '../lightning/FormElement';
import { Input } from '@salesforce/design-system-react';

function TextIdentifier({name, value, options, dispatch, ...props}) {
  return (
    <>
      <FormElement sizeLarge={6} sizeMedium={6} sizeSmall={12} sizeMax={12}>
        <Input
          type='text'
          id={ `${name}-value` }
          value={value}
          label="Value"
          onChange={ (event) => { dispatch({type: 'CHANGE_IDENTIFIER_VALUE', name: name, value: event.target.value}) } }/>
      </FormElement>
      <FormElement sizeLarge={2} sizeMax={12} sizeSmall={12}>
        <Input
          type='number'
          id={ `${name}-option-length` }
          value={options.length}
          label="Length"
          onChange={ (event) => { dispatch({type: 'CHANGE_IDENTIFIER_OPTIONS', name: name, value: { length: parseInt(event.target.value) }}) } }/>
      </FormElement>
    </>
  )
}

export default TextIdentifier;
