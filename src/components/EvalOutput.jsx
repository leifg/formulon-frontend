import React, { Component } from 'react'
import { parse } from 'formulon'
import { defaultOptions, transformIdentifiers } from '../utils/salesforceUtils'
import { Col, Grid, Row } from 'react-lightning-design-system'

export default class EvalOutput extends Component {
  render () {
    let ids = transformIdentifiers(this.props.formula.identifiers)
    let formulaResult = parse(this.props.formula.formula, ids)
    let output
    if (formulaResult.type === 'error') {
      output = <i>{formulaResult.errorType}: {formulaResult.message}</i>
    } else {
      let value = formulaResult.value == null ? '' : formulaResult.value
      output = <code>{value.toString()}</code>
    }
    return (<Grid className='slds-card' style={{ padding: '12px' }}>
      <Row>
        <Col>
          {output}
        </Col>
      </Row>
    </Grid>)
  }
}
