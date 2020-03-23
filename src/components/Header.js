import React from 'react'

const Header = () => {
  return (
    <div className='slds-builder-header_container'>
      <header className='slds-builder-header'>
        <div className='slds-builder-header__item'>
          <div className='slds-builder-header__item-label slds-media slds-media_center'>
            <div className='slds-media__figure'>
              <span className='slds-icon_container slds-icon-utility-builder slds-current-color'>
              <svg className='slds-icon slds-icon_x-small' aria-hidden='true'>
                  <use href='/assets/icons/utility-sprite/svg/symbols.svg#builder' />
                </svg>
              </span>
            </div>
            <div className='slds-media__body'>Formulon</div>
          </div>
        </div>
        <div className='slds-builder-header__item slds-builder-header__utilities'>
          <div className='slds-builder-header__utilities-item'>
            <a href='mailto:formulon@leif.io' className='slds-builder-header__item-action slds-media slds-media_center'>
              <div className='slds-media__figure'>
                <span className='slds-icon_container slds-icon-utility-help slds-current-color'>
                  <svg className='slds-icon slds-icon_x-small' aria-hidden='true'>
                    <use href='/assets/icons/utility-sprite/svg/symbols.svg#help' />
                  </svg>
                </span>
              </div>
              <div className='slds-media__body'>Feedback</div>
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
