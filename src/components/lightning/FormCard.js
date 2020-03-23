import React from 'react'
import CardHeader from './CardHeader'
import CardBody from './CardBody'

const FormCard = ({id, heading, icon, children}) => {
  return (
    <article id={ id } className='slds-card'>
      { (heading || icon) && <CardHeader heading={ heading } icon={ icon } /> }
      <CardBody>
        <fieldset className='slds-form-element slds-form-element_compound'>
          <div className='slds-form-element__control'>
            <div className='slds-form-element__row slds-wrap content' >
              { children }
            </div>
          </div>
        </fieldset>
      </CardBody>
    </article>
  )
}

export default FormCard
