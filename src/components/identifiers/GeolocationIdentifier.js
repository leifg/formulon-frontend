import React from 'react'
import FormElement from '../lightning/FormElement'
import { Input } from '@salesforce/design-system-react'

const GeolocationIdentifier = ({name, value, dispatch, ...props}) => {
  return (
    <>
      <FormElement sizeLarge={4}  sizeMedium={6} sizeSmall={6} sizeMax={12}>
        <Input
          type='number'
          id={ `${name}-latitude` }
          label="Latitude"
          onChange={ (event) => { dispatch({type: 'REQUEST_IDENTIFIER_VALUE_CHANGE', name: name, value: [parseFloat(event.target.value), value[1]]}) } }/>
      </FormElement>
      <FormElement sizeLarge={4}  sizeMedium={6} sizeSmall={6} sizeMax={12}>
        <Input
          type='number'
          id={ `${name}-value-longitude` }
          label="Longitude"
          onChange={ (event) => { dispatch({type: 'REQUEST_IDENTIFIER_VALUE_CHANGE', name: name, value: [value[0], parseFloat(event.target.value)]}) } }/>
      </FormElement>
    </>
  )
}

export default GeolocationIdentifier
