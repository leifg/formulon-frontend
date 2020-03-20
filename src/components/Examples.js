import React, { useContext } from 'react';

import CardHeader from './lightning/CardHeader';
import CardBody from './lightning/CardBody'

import { FormulaDispatchContext } from '../contexts'

import './Examples.css';

function Examples() {
  const dispatch = useContext(FormulaDispatchContext)

  return (
    <article id='examples' className='slds-card'>
      <CardHeader heading='Examples' icon='' />
      <CardBody>
        <ul className="slds-has-block-links_space">
          <li className="slds-text-heading_medium">
            <button className='example-link' onClick={dipatchPreset('workingDays', dispatch)}>
              Calculate Working Days between two dates
            </button>
          </li>
          <li className="slds-text-heading_medium">
            <button className='example-link' onClick={dipatchPreset('accountRegion', dispatch)}>
              Determine Account Region based on US State
            </button>
          </li>
        </ul>
      </CardBody>
    </article>
  )
}

const PRESETS = {
  workingDays: {
    formula: '(5 * ( FLOOR( ( date_1 - DATE( 1900, 1, 8) ) / 7 ) ) + MIN( 5, MOD( date_1 - DATE( 1900, 1, 8), 7 ) ) )\n-\n(5 * ( FLOOR( ( date_2 - DATE( 1900, 1, 8) ) / 7 ) ) + MIN( 5, MOD( date_2 - DATE( 1900, 1, 8), 7 ) ) )',
    identifiers: [
      {
        name: 'date_1',
        dataType: 'date',
        value: new Date(1582934400000), // 2020-02-29
        options: {}
      },
      {
        name: 'date_2',
        dataType: 'date',
        value: new Date(1580515200000), // 2020-02-01
        options: {}
      },
    ]
  },
  accountRegion: {
    formula: 'IF(ISBLANK(BillingState), "None",\nIF(CONTAINS("AK:AZ:CA:HA:NV:NM:OR:UT:WA", BillingState), "West",\nIF(CONTAINS("CO:ID:MT:KS:OK:TX:WY", BillingState), "Central",\nIF(CONTAINS("CT:ME:MA:NH:NY:PA:RI:VT", BillingState), "East",\nIF(CONTAINS("AL:AR:DC:DE:FL:GA:KY:LA:MD:MS:NC:NJ:SC:TN:VA:WV", BillingState), "South",\nIF(CONTAINS("IL:IN:IA:MI:MN:MO:NE:ND:OH:SD:WI", BillingState), "North", "Other"))))))',
    identifiers: [
      {
        name: 'BillingState',
        dataType: 'text',
        value: 'CA',
        options: { length: 2 }
      },
    ]
  }
}

const dipatchPreset = (name, dispatch) => {
  return () => {
    dispatch({
      type: 'OVERWRITE_FORMULA',
      ...PRESETS[name]
    })
  }
}

export default Examples;
