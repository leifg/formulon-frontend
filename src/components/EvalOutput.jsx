import React, { Component } from "react"
import { parse } from "formulon"
import { defaultMeta } from "../utils/salesforceUtils"

export default class EvalOutput extends Component {
  render() {
    let input
    if(this.props.formula.formula == null) {
      input = "1+1"
    }
    else {
      input = this.props.formula.formula
    }
    try {
      let ids = this.transformIdentifiers(this.props.formula.identifiers)
      let parsedFormula = parse(input, ids)
      return <div className="well well-lg"><code>{ parsedFormula }</code></div>
    }
    catch(err){
      return <div className="well well-lg"><code>{ input }</code></div>
    }
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
