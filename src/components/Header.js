import React, { useContext } from 'react'

import Help from './Help'

import { FormulaDispatchContext } from '../contexts'

import './Header.css'

const Header = () => {
  const dispatch = useContext(FormulaDispatchContext)
  const toggleHelp = () => { dispatch({type: 'TOGGLE_HELP'}) }

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
                <span className='slds-icon_container slds-icon-utility-back slds-current-color'>
                  <svg className='slds-icon slds-icon_x-small' aria-hidden='true'>
                    <use href='/assets/icons/utility-sprite/svg/symbols.svg#email' />
                  </svg>
                </span>
              </div>
              <div className='slds-media__body'>Feedback</div>
            </a>
          </div>
          <div className='slds-builder-header__utilities-item'>
            <button className='link-button slds-builder-header__item-action slds-media slds-media_center' onClick={toggleHelp}>
              <div className='slds-media__figure'>
                <span className='slds-icon_container slds-icon-utility-help slds-current-color'>
                  <svg className='slds-icon slds-icon_x-small' aria-hidden='true'>
                    <use href='/assets/icons/utility-sprite/svg/symbols.svg#help' />
                  </svg>
                </span>
              </div>
              <div className='slds-media__body'>What is this?</div>
            </button>
          </div>
        </div>
      </header>
      { <Help /> }
    </div>
  )
}

export default Header
