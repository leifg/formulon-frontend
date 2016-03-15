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
      const parsedFormula = parse(input, {})
      return <div>{ parsedFormula }</div>
    }
    catch(err){
      return <div>{ input }</div>
    }
  }
}
