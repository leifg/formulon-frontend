import React from "react"
import FormElement from "../lightning/FormElement"
import { Datepicker, IconSettings, Timepicker } from "@salesforce/design-system-react"

const DateTimeIdentifier = ({name, value, options, dispatch}) => {
  return (
    <>
      <FormElement sizeLarge={4} sizeMax={6} sizeSmall={6}>
        <IconSettings iconPath="/assets/icons">
          <Datepicker
            id={ `${name}-value` }
            labels={{
              label: "Value",
            }}
            value=""
            onChange={ (_event, data) => {
              dispatch({
                type: "REQUEST_IDENTIFIER_VALUE_CHANGE",
                name: name,
                value: setDatePart(value, data.date)
              })
            }}
          />
        </IconSettings>
      </FormElement>
      <FormElement sizeLarge={4} sizeMax={6} sizeSmall={6}>
        <IconSettings iconPath="/assets/icons">
          <Timepicker
            id={ `${name}-value` }
            labels={{
              label: "Value",
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
                type: "REQUEST_IDENTIFIER_VALUE_CHANGE",
                name: name,
                value: setTimePart(value, millisecondsSinceMidnightlet)
              })
              dispatch({
                type: "REQUEST_IDENTIFIER_OPTIONS_CHANGE",
                name: name, value: { timeString: inputStr }
              })
            }}
          />
        </IconSettings>
      </FormElement>
    </>
  )
}

const MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000

const setDatePart = (oldDatetime, newDate) => {
  let oldUnixTimeStamp = (oldDatetime || new Date()).getTime()
  let timePart = oldUnixTimeStamp % MILLISECONDS_IN_DAY
  let newDateTimestamp = Date.UTC(newDate.getFullYear(), newDate.getMonth(), newDate.getDate())

  return new Date(newDateTimestamp + timePart)
}

const setTimePart = (oldDatetime, newTimestamp) => {
  let oldUnixTimeStamp = (oldDatetime || new Date()).getTime()
  let datePart = oldUnixTimeStamp - (oldUnixTimeStamp % MILLISECONDS_IN_DAY)

  return new Date(datePart + newTimestamp)
}

export default DateTimeIdentifier
