import React from 'react';
import FormElement from '../lightning/FormElement';
import { Datepicker, IconSettings } from '@salesforce/design-system-react';

function DateIdentifier({name, value, options, dispatch, ...props}) {
  return (
    <>
      <FormElement sizeLarge={8} sizeMax={12} sizeSmall={12}>
        <IconSettings iconPath="/assets/icons">
            <Datepicker
              id={ `${name}-value` }
              labels={{
                label: 'Value',
              }}
              value=""
              onChange={ (_event, data) => {
                dispatch({
                  type: 'CHANGE_IDENTIFIER_VALUE',
                  name: name,
                  value: new Date(Date.UTC(data.date.getFullYear(), data.date.getMonth(), data.date.getDate()))
                })
              }}
            />
        </IconSettings>
      </FormElement>
    </>
  )
}

export default DateIdentifier;
