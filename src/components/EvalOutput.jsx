import React, { Component } from "react"
import { parse } from "formulon"

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
      const parsedFormula = parse(input, ids)
      return <div>{ parsedFormula }</div>
    }
    catch(err){
      return <div>{ input }</div>
    }
  }

  transformIdentifiers(identifersList) {
    return identifersList.reduce((agg, identifier) => {
      console.log(identifier.name)
      console.log(identifier.value)
      console.log(identifier.dataType)
      return Object.assign(
        agg,
        {
          // [identifier.name]: {
          //   value: identifier.value,
          //   dataType: identifier.dataType
          // }
          [identifier.name]: identifier.value,
        }
      )
    }, {})
  }
}
