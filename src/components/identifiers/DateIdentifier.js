import React from 'react'
import FormElement from '../lightning/FormElement'
import { Datepicker, IconSettings } from '@salesforce/design-system-react'

const DateIdentifier = ({name, value, dispatch, ...props}) => {
  return (
    <>
      <FormElement sizeLarge={8} sizeMax={12} sizeSmall={12}>
        <IconSettings iconPath='/assets/icons'>
            <Datepicker
              id={ `${name}-value` }
              labels={{
                label: 'Value',
              }}
              value={value && fromUTC(value)}
              onChange={ (_event, data) => {
                dispatch({
                  type: 'REQUEST_IDENTIFIER_VALUE_CHANGE',
                  name: name,
                  value: toUTC(data.date)
                })
              }}
            />
        </IconSettings>
      </FormElement>
    </>
  )
}

const toUTC = (input) => {
  return new Date(Date.UTC(input.getFullYear(), input.getMonth(), input.getDate()))
}

const fromUTC = (input) => {
  return new Date(input.getUTCFullYear(), input.getUTCMonth(), input.getUTCDate())
}

export default DateIdentifier
