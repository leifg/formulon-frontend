import React, { useContext } from "react"

import CardHeader from "./lightning/CardHeader"
import CardBody from "./lightning/CardBody"

import { FormulaDispatchContext } from "../contexts"

import "./Examples.css"

const Examples = () => {
  const dispatch = useContext(FormulaDispatchContext)

  return (
    <article id="examples" className="slds-card">
      <CardHeader heading="Examples" icon="bot_training" />
      <CardBody>
        <ul className="slds-has-block-links_space">
          <li className="slds-text-heading_medium">
            <button className="example-link" data-testid="example01" onClick={dispatchPreset("workingDays", dispatch)}>
              Calculate Working Days between two dates
            </button>
          </li>
          <li className="slds-text-heading_medium">
            <button className="example-link" data-testid="example02" onClick={dispatchPreset("accountRegion", dispatch)}>
              Determine Account Region based on US State
            </button>
          </li>
          <li className="slds-text-heading_medium">
            <button className="example-link" data-testid="example03" onClick={dispatchPreset("totalPayAmount", dispatch)}>
              Total Pay Amount
            </button>
          </li>
        </ul>
        <p className="footer-content">
          powered by <a href="https://github.com/leifg/formulon" target="_blank" rel="noopener noreferrer">formulon</a> built by <a href="https://leif.io" target="_blank" rel="noopener noreferrer">Leif Gensert</a>
        </p>
      </CardBody>
    </article>
  )
}

const PRESETS = {
  workingDays: {
    formula: "(5 * ( FLOOR( ( date_1 - DATE( 1900, 1, 8) ) / 7 ) ) + MIN( 5, MOD( date_1 - DATE( 1900, 1, 8), 7 ) ) )\n-\n(5 * ( FLOOR( ( date_2 - DATE( 1900, 1, 8) ) / 7 ) ) + MIN( 5, MOD( date_2 - DATE( 1900, 1, 8), 7 ) ) )",
    returnType: "number",
    identifiers: [
      {
        name: "date_1",
        dataType: "date",
        value: new Date(1582934400000), // 2020-02-29
        options: {}
      },
      {
        name: "date_2",
        dataType: "date",
        value: new Date(1580515200000), // 2020-02-01
        options: {}
      },
    ]
  },
  accountRegion: {
    formula: "IF(ISBLANK(BillingState), \"None\",\nIF(CONTAINS(\"AK:AZ:CA:HA:NV:NM:OR:UT:WA\", BillingState), \"West\",\nIF(CONTAINS(\"CO:ID:MT:KS:OK:TX:WY\", BillingState), \"Central\",\nIF(CONTAINS(\"CT:ME:MA:NH:NY:PA:RI:VT\", BillingState), \"East\",\nIF(CONTAINS(\"AL:AR:DC:DE:FL:GA:KY:LA:MD:MS:NC:NJ:SC:TN:VA:WV\", BillingState), \"South\",\nIF(CONTAINS(\"IL:IN:IA:MI:MN:MO:NE:ND:OH:SD:WI\", BillingState), \"North\", \"Other\"))))))",
    returnType: "text",
    identifiers: [
      {
        name: "BillingState",
        dataType: "text",
        value: "CA",
        options: { length: 255 }
      },
    ]
  },
  totalPayAmount: {
    formula: "IF(Total_Hours__c <= 40, Total_Hours__c * Hourly_Rate__c,  40 * Hourly_Rate__c + (Total_Hours__c - 40) * Overtime_Rate__c)",
    returnType: "number",
    identifiers: [
      {
        name: "Total_Hours__c",
        dataType: "number",
        value: 55,
        options: { length: 8, scale: 2}
      },
      {
        name: "Hourly_Rate__c",
        dataType: "number",
        value: 20,
        options: { length: 8, scale: 2}
      },
      {
        name: "Overtime_Rate__c",
        dataType: "number",
        value: 30,
        options: { length: 8, scale: 2}
      }
    ],
  }
}


const dispatchPreset = (name, dispatch) => {
  return () => {
    dispatch({
      type: "OVERWRITE_FORMULA",
      ...PRESETS[name]
    })
  }
}

export default Examples
