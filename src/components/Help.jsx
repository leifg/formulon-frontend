import React, { useContext } from "react"

import { Button, Modal } from "@salesforce/design-system-react"

import { FormulaStateContext, FormulaDispatchContext } from "../contexts"

const Help = () => {
  const state = useContext(FormulaStateContext)
  const dispatch = useContext(FormulaDispatchContext)

  const toggleHelp = () => { dispatch({type: "TOGGLE_HELP"}) }

  return (
    <Modal
      isOpen={state.helpOpen}
      size="medium"
      footer={[
        <Button label="Close" key="close" variant="brand" onClick={toggleHelp} />
      ]}
      onRequestClose={toggleHelp}
      heading="Help"
    >
      <section className="slds-p-around_medium">
        <p><h2 className="slds-text-heading_large slds-text-title_bold slds-p-bottom_small">What is Formulon?</h2></p>
        <p>This tool is for everyone who writes or maintains <a href="https://help.salesforce.com/articleView?id=customize_formuladef.htm" target="_blank" rel="noopener noreferrer">Salesforce Formulas</a>. It shortens the development cycle by a lot.</p>
        <p>Instead of writing formulas and testing it on several test data records, simply write the code into the formula field on this page and see the result right away</p>
        <p>If you&apos;re using variables, test the output with different values and get a feeling if your formula works in edge cases</p>
        <p>The best way to get started is to try out any of the examples listed below</p>
      </section>
      <section className="slds-p-around_medium">
        <p><h2 className="slds-text-heading_large slds-text-title_bold slds-p-bottom_small">Limitations</h2></p>
        <p>Formulon is a reimplementation of the Salesforce formula language in JavaScript. The most common functions have been implemented and verified against its original implementations</p>
        <p>However there are some features that won&apos;t work in this implementation:</p>
        <p>
          <ul className="slds-list_dotted">
            <li>Cross Object Formulas (Work in Progress)</li>
            <li>Functions that rely on external state such as ISNEW, ISCHANGED, PRIORVALUE</li>
            <li>GETSESSIONID returns a static value (<code>00D3z000001eRlg!AQMAQC3Y4aM9sFux6SRWhyFcOUKin4taGaBxNMU8TN_R_1R0Y7ArI95eSyzQZVIlrnV_unTbmwHZlXex8xhlXz2kXZNP49Fa</code>)</li>
          </ul>
        </p>
        <p>If you are missing any functionality, don&apos;t hesitate to reach out: <a href="mailto:formulon@leif.io">formulon@leif.io</a></p>
      </section>
    </Modal>
  )
}

export default Help
