import React from 'react'
import CardHeader from './lightning/CardHeader'
import CardBody from './lightning/CardBody'
import CheckboxIdentifier from './identifiers/CheckboxIdentifier'
import DateIdentifier from './identifiers/DateIdentifier'
import TimeIdentifier from './identifiers/TimeIdentifier'
import DatetimeIdentifier from './identifiers/DatetimeIdentifier'
import TextIdentifier from './identifiers/TextIdentifier'
import PicklistIdentifier from './identifiers/PicklistIdentifier'
import MultipicklistIdentifier from './identifiers/MultipicklistIdentifier'
import GeolocationIdentifier from './identifiers/GeolocationIdentifier'
import NumberIdentifier from './identifiers/NumberIdentifier'
import DataTypeSelector from './identifiers/DataTypeSelector'

import './Identifier.css'

const Identifier = ({name, type, value, options, dispatch}) => {
  return (
    <article
      id={`identifier-${name}`}
      className='slds-card'
    >
      <CardHeader heading={name} icon={dispatchIconName(type)}/>
      <CardBody>
        <fieldset className='slds-form-element slds-form-element_compound slds-form-element_address'>
          <div className='slds-form-element__control'>
            <div className='slds-form-element__row slds-wrap'>
              <DataTypeSelector selected={ type } name={name} dispatch={ dispatch }/>
              { dispatchIdentifier(type, name, value, options, dispatch) }
            </div>
          </div>
        </fieldset>
      </CardBody>
    </article>
  )
}

const dispatchIdentifier = (type, name, value, options, dispatch) => {
  switch(type) {
    case 'number':
      return <NumberIdentifier name={name} value={value} options={options} dispatch={dispatch} />
    case 'date':
      return <DateIdentifier name={name} value={value} options={options} dispatch={dispatch} />
    case 'time':
      return <TimeIdentifier name={name} value={value} options={options} dispatch={dispatch} />
    case 'datetime':
      return <DatetimeIdentifier name={name} value={value} options={options} dispatch={dispatch} />
    case 'geolocation':
      return <GeolocationIdentifier name={name} value={value} options={options} dispatch={dispatch} />
    case 'checkbox':
      return <CheckboxIdentifier name={name} value={value} options={options} dispatch={dispatch} />
    case 'picklist':
      return <PicklistIdentifier name={name} value={value} options={options} dispatch={dispatch} />
    case 'multipicklist':
      return <MultipicklistIdentifier name={name} value={value} options={options} dispatch={dispatch} />
    default:
      return <TextIdentifier name={name} value={value} options={options} dispatch={dispatch} />
  }
}

const dispatchIconName = (type) => {
  switch(type) {
    case 'number':
      return 'number_input'
    case 'date':
      return 'date_input'
    case 'time':
      return 'clock'
    case 'datetime':
      return 'date_time'
    case 'checkbox':
      return 'multi_select_checkbox'
    case 'picklist':
      return 'picklist_type'
    case 'multipicklist':
      return 'multi_picklist'
    case 'geolocation':
      return 'location'
    default:
      return 'text'
  }
}

export default Identifier
