import React from "react"

import IconWithTitle from "./IconWithTitle"

const CardHeader = ({heading, icon}) => {
  return (
    <div className="slds-card__header slds-grid">
      <header className="slds-media slds-media_center slds-has-flexi-truncate">
        <IconWithTitle name={icon} title={heading} />
      </header>
    </div>
  )
}

export default CardHeader
