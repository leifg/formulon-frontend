import React from 'react';
import FormElement from '../lightning/FormElement';
import { Checkbox } from '@salesforce/design-system-react';

const CheckboxIdentifier = ({name, value, dispatch}) => {
  return (
    <>
      <FormElement sizeLarge={8} sizeMax={12} sizeSmall={12}>
        <Checkbox
          variant='toggle'
          id={ `${name}-value` }
          name={ name }
          checked={ value }
          labels={ { toggleDisabled: 'False', toggleEnabled: 'True', } }
          onChange={ (_event, value) => {
            dispatch({type: 'REQUEST_IDENTIFIER_VALUE_CHANGE', name: name, value: value.checked }) }
          }
        />
      </FormElement>
    </>
  )
}

export default CheckboxIdentifier;
