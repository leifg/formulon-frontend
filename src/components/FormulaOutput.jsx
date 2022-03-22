import React, {useContext} from "react"

import FormCard from "./lightning/FormCard"
import FormElement from "./lightning/FormElement"
import { Textarea, Spinner } from "@salesforce/design-system-react"

import { FormulaStateContext } from "../contexts"

import "./FormulaOutput.css"

const FormulaOutput = () => {
  const state = useContext(FormulaStateContext)

  return (
    <FormCard id="formula-output" testId="formula-output" heading="Result" icon="note">
      <FormElement size={12}>
        {
          state.processing ?  <Spinner
            containerClassName="formula-spinner"
            size="large"
            variant="base"
            assistiveText={{ label: "Calculating Formula" }}
          /> : <Textarea
            id="formula"
            value={state.result}
            className={["slds-text-font_monospace"]}
            disabled />
        }

      </FormElement>
    </FormCard>
  )
}

export default FormulaOutput
