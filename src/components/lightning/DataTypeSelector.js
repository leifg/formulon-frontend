import React from 'react'
import FormElement from '../lightning/FormElement'
import { Combobox, IconSettings } from '@salesforce/design-system-react'

const dataTypes = [
  {
    id: 'number',
    label: 'Number',
  },
  {
    id: 'text',
    label: 'Text',
  },
  {
    id: 'date',
    label: 'Date',
  },
  {
    id: 'time',
    label: 'Time',
  },
  {
    id: 'datetime',
    label: 'Date/Time',
  },
  {
    id: 'checkbox',
    label: 'Checkbox',
  },
  {
    id: 'picklist',
    label: 'Picklist (Single)',
  },
  {
    id: 'multipicklist',
    label: 'Picklist (Multi)',
  },
  {
    id: 'geolocation',
    label: 'Geolocation',
  }
]

const DataTypeSelector = ({selected, onSelect}) => {
  const selectedElement = dataTypes.find(element => element.id === selected)

  return (
    <FormElement label='Data Type' sizeLarge={4} sizeMedium={12} sizeSmall={12} sizeMax={12}>
      <IconSettings iconPath='/assets/icons'>
        <Combobox
          id='data-type-selector'
          variant='readonly'
          labels={{
            label: 'Data Type',
            placeholder: 'Select Data Type',
          }}
          events={{
            onSelect: onSelect
          }}
          options={dataTypes}
          selection={[selectedElement]} />
      </IconSettings>
    </FormElement>
  )
}

export default DataTypeSelector
