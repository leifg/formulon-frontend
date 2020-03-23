import React from 'react'
import classnames from 'classnames'

const FormElement = ({size, sizeSmall, sizeMedium, sizeLarge, sizeMax = 12, className= [], children}) => {
  const sizeClass = classnames([
    size ? `slds-size_${size}-of-${sizeMax}` : null,
    sizeSmall ? `slds-small-size_${sizeSmall}-of-12` : null,
    sizeMedium ? `slds-medium-size_${sizeMedium}-of-12` : null,
    sizeLarge ? `slds-large-size_${sizeLarge}-of-12` : null,]
  ).concat(className)

  return (
    <div className={ sizeClass }>
      <div className='slds-form-element'>
        <div className='slds-form-element__control'>
          { children }
        </div>
      </div>
    </div>
  )
}

export default FormElement
