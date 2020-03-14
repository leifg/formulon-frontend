import React from 'react';
import CardHeader from './lightning/CardHeader';
import CardBody from './lightning/CardBody';
import CheckboxIdentifier from './identifiers/CheckboxIdentifier';
import TextIdentifier from './identifiers/TextIdentifier';
import GeolocationIdentifier from './identifiers/GeolocationIdentifier';
import NumberIdentifier from './identifiers/NumberIdentifier';
import DataTypeSelector from './identifiers/DataTypeSelector';

import './Identifier.css';

function Identifier({name, type, value, options, dispatch}) {
  return (
    <article
      id={`identifier-${name}`}
      className='slds-card'
    >
      <CardHeader heading={name} icon={dispatchIconName(type)}/>
      <CardBody>
        <fieldset className="slds-form-element slds-form-element_compound slds-form-element_address">
          <div className="slds-form-element__control">
            <div className="slds-form-element__row slds-wrap">
              <DataTypeSelector selected={ type } name={name} dispatch={ dispatch }/>
              { dispatchIdentifier(type, name, value, options, dispatch) }
            </div>
          </div>
        </fieldset>
      </CardBody>
    </article>
  )
}

function dispatchIdentifier(type, name, value, options, dispatch) {
  switch(type) {
    case 'number':
      return <NumberIdentifier name={name} value={value} options={options} dispatch={dispatch} />
    case 'geolocation':
      return <GeolocationIdentifier name={name} value={value} options={options} dispatch={dispatch} />
    case 'checkbox':
      return <CheckboxIdentifier name={name} value={value} options={options} dispatch={dispatch} />
    default:
      return <TextIdentifier name={name} value={value} options={options} dispatch={dispatch} />
  }
}

function dispatchIconName(type) {
  switch(type) {
    case 'number':
      return 'number_input'
    case 'checkbox':
      return 'multi_select_checkbox'
    case 'geolocation':
      return 'location'
    default:
      return 'text'
  }
}

export default Identifier;
