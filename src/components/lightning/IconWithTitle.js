import React from 'react';

const IconWithTitle = ({title, name }) => {
  return (
    <>
      <div className="slds-media__figure">
        <span className={`slds-icon_container slds-icon-standard-bot`} title={ title }>
          <svg className="slds-icon slds-icon_small" aria-hidden="true">
            <use href={`/assets/icons/standard-sprite/svg/symbols.svg#${name}`}></use>
          </svg>
          <span className="slds-assistive-text">{ title }</span>
        </span>
      </div>
      <div className="slds-media__body">
        <h2 className="slds-card__header-title slds-card__header-link">
          { title }
        </h2>
      </div>
    </>
  )
}

export default IconWithTitle;
