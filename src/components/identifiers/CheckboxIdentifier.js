import React from 'react';
import FormElement from '../lightning/FormElement';
import { Checkbox } from '@salesforce/design-system-react';

function CheckboxIdentifier({name, value, dispatch, ...props}) {
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
            dispatch({type: 'CHANGE_IDENTIFIER_VALUE', name: name, value: value.checked }) }
            }/>
      </FormElement>
    </>
  )
}

export default CheckboxIdentifier;
