import React from 'react';

function CardBody({icon, children, ...props}) {
  return (
    <div className="slds-card__body slds-card__body_inner">
      { children }
    </div>
  );
}

export default CardBody;
