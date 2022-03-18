import React from 'react'

const CardBody = ({icon, children, ...props}) => {
  return (
    <div className='slds-card__body slds-card__body_inner'>
      { children }
    </div>
  )
}

export default CardBody
