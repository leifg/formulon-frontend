import React from "react"
import classnames from "classnames"

const Column = ({padded, size, sizeSmall, sizeMedium, sizeLarge, className = [], ...props}) => {
  const classNames = classnames([
    padded ? "slds-col_padded" : "slds-col",
    size ? `slds-size_${size}-of-12` : null,
    sizeSmall ? `slds-small-size_${sizeSmall}-of-12` : null,
    sizeMedium ? `slds-medium-size_${sizeMedium}-of-12` : null,
    sizeLarge ? `slds-large-size_${sizeLarge}-of-12` : null,
  ].concat(className))

  return (
    <div className={classNames}>
      { props.children }
    </div>
  )
}

export default Column
