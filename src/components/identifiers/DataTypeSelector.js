import React from 'react';
import FormElement from '../lightning/FormElement';
import { Combobox, IconSettings } from '@salesforce/design-system-react';

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

function DataTypeSelector({selected, name, dispatch, ...props}) {
  const selectedElement = dataTypes.find(element => element.id === selected)

  return (
    <FormElement label='Data Type' sizeLarge={4} sizeMedium={12} sizeSmall={12} sizeMax={12}>
      <IconSettings iconPath="/assets/icons">
        <Combobox
          id="combobox-readonly-single"
          variant="readonly"
          labels={{
            label: 'Data Type',
            placeholder: 'Select Data Type',
          }}
          events={{
            onSelect: (_event, data) => {
              dispatch({type: 'CHANGE_IDENTIFIER_TYPE', name: name, value: data.selection[0].id})
            }
          }}
          options={dataTypes}
          selection={[selectedElement]} />
      </IconSettings>
    </FormElement>
  )
}

export default DataTypeSelector;
