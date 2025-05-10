import React from "react"
import FormElement from "../lightning/FormElement"
import { Combobox, IconSettings, Input } from "@salesforce/design-system-react"

const MultiPicklistIdentifier = ({name, value, options, dispatch}) => {
  return (
    <>
      <FormElement sizeLarge={4} sizeMax={12} sizeSmall={12}>
        <IconSettings iconPath="/assets/icons">
          <Combobox
            id={ `${name}-value` }
            variant="readonly"
            labels={{
              label: "Value",
              placeholder: "Select Value",
            }}
            value=""
            events={{
              onSelect: (_event, data) => {
                if(data.selection[0] && value.indexOf(data.selection[0].id) === -1) {
                  dispatch({
                    type: "REQUEST_IDENTIFIER_VALUE_CHANGE",
                    name: name,
                    value: value.concat(data.selection[0].id)
                  })
                }
              }
            }}
            options={mapValues(options.values)}
            selection={mapValues(value)} />
        </IconSettings>
      </FormElement>
      <FormElement sizeLarge={4} sizeMax={12} sizeSmall={12}>
        <Input
          type="text"
          id={ `${name}-option-values` }
          value={options.values.join(";")}
          placeholder="separate by ;"
          label="Values"
          onChange={ (event) => {
            dispatch({
              type: "CHANGE_IDENTIFIER_PICKLIST_VALUES",
              name: name,
              values: event.target.value.split(";")
            })}
          } />
      </FormElement>
    </>
  )
}

const mapValues = (values) => {
  return values.map(mapValue)
}

const mapValue = (value) => ({ id: value, label: value })

export default MultiPicklistIdentifier
