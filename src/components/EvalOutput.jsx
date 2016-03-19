import React, { Component } from "react"
import { parse } from "formulon"
import { defaultMeta } from "../utils/salesforceUtils"

export default class EvalOutput extends Component {
  render() {
    let ids = this.transformIdentifiers(this.props.formula.identifiers)
    let formulaResult = parse(this.props.formula.formula, ids)
    let output
    if(formulaResult.type == "Error") {
      output = <i>{formulaResult.errorType}: {formulaResult.errorType}</i>
    }
    else {
      output = <code>{ formulaResult.value }</code>
    }
    return <div className="well well-lg">{ output }</div>
  }

  transformIdentifiers(identifersList) {
    return identifersList.reduce((agg, identifier) => {
      return Object.assign(
        agg,
        {
          [identifier.name]: {
            value: identifier.value,
            dataType: identifier.dataType,
            meta: defaultMeta(identifier.dataType)
          }
        }
      )
    }, {})
  }
}
