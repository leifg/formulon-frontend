import React from "react"
import { Combobox, IconSettings } from "@salesforce/design-system-react"

const dataTypes = [
  {
    id: "number",
    label: "Number",
  },
  {
    id: "text",
    label: "Text",
  },
  {
    id: "date",
    label: "Date",
  },
  {
    id: "time",
    label: "Time",
  },
  {
    id: "datetime",
    label: "Date/Time",
  },
  {
    id: "checkbox",
    label: "Checkbox",
  },
  {
    id: "geolocation",
    label: "Geolocation",
  }
]

const ReturnType = ({returnType, dispatch}) => {
  const onSelect = (_event, data) => {
    dispatch({type: "UPDATE_RETURN_TYPE", value: data.selection[0].id})
  }
  const selectedElement = dataTypes.find(element => element.id === returnType)

  return (
    <IconSettings iconPath="/assets/icons">
      <Combobox
        id="data-type-selector"
        variant="readonly"
        labels={{
          label: "Return Type",
          placeholder: "Select Return Type",
        }}
        events={{
          onSelect: onSelect
        }}
        options={dataTypes}
        selection={[selectedElement]} />
    </IconSettings>
  )
}

export default ReturnType
