import React from 'react'
import FormElement from '../lightning/FormElement'
import { Timepicker, IconSettings } from '@salesforce/design-system-react'

const TimeIdentifier = ({name, value, options, dispatch}) => {
  return (
    <>
      <FormElement sizeLarge={8} sizeMax={12} sizeSmall={12}>
        <IconSettings iconPath='/assets/icons'>
            <Timepicker
              id={ `${name}-value` }
              labels={{
                label: 'Value',
              }}
              stepInMinutes={15}
              value={value}
              strValue={options.timeString}
              onDateChange={ (date, inputStr) => {
                let millisecondsSinceMidnightlet =
                  date.getMilliseconds() +
                  date.getSeconds() * 1000 +
                  date.getMinutes() * 60 * 1000 +
                  date.getHours() * 60 * 60 * 1000
                dispatch({
                  type: 'REQUEST_IDENTIFIER_VALUE_CHANGE',
                  name: name,
                  value: new Date(millisecondsSinceMidnightlet)
                })
                dispatch({
                  type: 'REQUEST_IDENTIFIER_OPTIONS_CHANGE',
                  name: name, value: { timeString: inputStr }
                })
              }}
            />
        </IconSettings>
      </FormElement>
    </>
  )
}

export default TimeIdentifier
