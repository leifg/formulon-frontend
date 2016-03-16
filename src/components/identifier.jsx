import React, { Component } from "react"

// const Identifier = ({ name }) => <li> {name} </li>
// export default Identifier

export default class Identifier extends Component {
  render() {
    const { attributes } = this.props
    return <li> {attributes.name} </li>
  }
}
