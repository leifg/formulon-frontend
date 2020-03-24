import React, { useContext } from 'react'

import { Button, Modal } from '@salesforce/design-system-react'

import { FormulaStateContext, FormulaDispatchContext } from '../contexts'

const Help = () => {
  const state = useContext(FormulaStateContext)
  const dispatch = useContext(FormulaDispatchContext)

  const toggleHelp = () => { dispatch({type: 'TOGGLE_HELP'}) }

  return (
    <Modal
      isOpen={state.helpOpen}
      size='large'
      footer={[
        <Button label='Close' key='close' variant="brand" onClick={toggleHelp} />
      ]}
      onRequestClose={toggleHelp}
      heading='Help'
    >
      <section className="slds-p-around_large">
        <p><h2 className='slds-text-heading_large slds-text-title_bold slds-p-bottom_small'>Formulon is a full featured Salesforce Formula Parser</h2></p>
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
          aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
        <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
          ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      </section>
      <section className="slds-p-around_large">
        <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Cillum sunt ad dolore quis
          aute consequat ipsum magna exercitation reprehenderit magna. Tempor cupidatat consequat elit dolor adipisicing.</p>
        <p>Dolor eiusmod sunt ex incididunt cillum quis nostrud velit duis sit officia. Lorem aliqua enim laboris do dolor eiusmod officia. Mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident. Eiusmod et adipisicing culpa deserunt nostrud
          ad veniam nulla aute est. Labore esse esse cupidatat amet velit id elit consequat minim ullamco mollit enim excepteur ea.</p>
      </section>
    </Modal>
  )
}

export default Help
