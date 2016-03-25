import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import FormulaInput from '../components/FormulaInput'
import IdentifierList from '../components/IdentifierList'
import EvalOutput from '../components/EvalOutput'
import { changeFormula, changeIdentifier } from '../actions/IdentifierActions'

class FormulonApp extends React.Component {
  render () {
    const { formula, changeFormula, changeIdentifier } = this.props
    return (
      <div className='container-fluid'>
        <IdentifierList identifiers={formula.identifiers} changeIdentifier={changeIdentifier}/>
        <FormulaInput changeFormula={changeFormula} />
        <EvalOutput formula={formula} />
      </div>
    )
  }
}

export default connect(
  ({formula}) => ({formula}),
  (dispatch) => (bindActionCreators({changeFormula, changeIdentifier}, dispatch))
)(FormulonApp)
