import React from 'react';

const Header = () => {
  return (
    <div class="slds-builder-header_container">
      <header class="slds-builder-header">
        <div class="slds-builder-header__item">
          <div class="slds-builder-header__item-label slds-media slds-media_center">
            <div class="slds-media__figure">
              <span class="slds-icon_container slds-icon-utility-builder slds-current-color">
              <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                  <use href='/assets/icons/utility-sprite/svg/symbols.svg#builder' />
                </svg>
              </span>
            </div>
            <div class="slds-media__body">Formulon</div>
          </div>
        </div>
        <div class="slds-builder-header__item slds-builder-header__utilities">
          <div class="slds-builder-header__utilities-item">
            <a href="mailto:formulon@leif.io" class="slds-builder-header__item-action slds-media slds-media_center">
              <div class="slds-media__figure">
                <span class="slds-icon_container slds-icon-utility-help slds-current-color">
                  <svg class="slds-icon slds-icon_x-small" aria-hidden="true">
                    <use href="/assets/icons/utility-sprite/svg/symbols.svg#help" />
                  </svg>
                </span>
              </div>
              <div class="slds-media__body">Feedback</div>
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
