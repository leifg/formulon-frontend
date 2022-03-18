import React from 'react'
import classnames from 'classnames'

const Row = ({padded, children, className = [], ...props}) => {
  const classNames = classnames([
    padded ? 'slds-col_padded' : 'slds-col',
    'slds-wrap',
    'slds-grid_align-center',
    'slds-grid_vertical-align-start',
    'slds-size_12-of-12']
  ).concat(className)

  return (
    <div className={classNames}>
      { children }
    </div>
  )
}

export default Row
