import React from "react"
import classnames from "classnames"

const Grid = ({className = [], ...props}) => {
  const classNames = classnames([
    "slds-grid",
    "slds-wrap",
    "slds-grid_align-center"
  ].concat(className))

  return (
    <div className={classNames}>
      { props.children }
    </div>
  )
}

export default Grid
