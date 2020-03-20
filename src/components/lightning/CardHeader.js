import React from 'react';

const CardHeader = ({heading, icon, ...props}) => {
  return (
    <div className="slds-card__header slds-grid">
      <header className="slds-media slds-media_center slds-has-flexi-truncate">
        <div className="slds-media__figure">
          <span className="slds-icon_container slds-icon-standard-account" title={ heading }>
          <svg className="slds-icon slds-icon_small" aria-hidden="true">
            <use href={`/assets/icons/standard-sprite/svg/symbols.svg#${icon}`}></use>
          </svg>
          <span className="slds-assistive-text">{ heading }</span>
        </span>
      </div>
      <div className="slds-media__body">
        <h2 className="slds-card__header-title slds-card__header-link">
          { heading }
        </h2>
      </div>
    </header>
  </div>
  );
}

export default CardHeader;
