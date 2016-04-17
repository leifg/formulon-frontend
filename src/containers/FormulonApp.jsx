import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Grid } from 'react-lightning-design-system'
import FormulaInput from '../components/FormulaInput'
import IdentifierList from '../components/IdentifierList'
import EvalOutput from '../components/EvalOutput'
import { changeFormula, changeIdentifierDataType, changeIdentifierOptions, changeIdentifierValue } from '../actions/IdentifierActions'

class FormulonApp extends React.Component {
  render () {
    const { formula, changeFormula, changeIdentifierDataType, changeIdentifierOptions, changeIdentifierValue } = this.props
    return (
      <Grid style={{padding: '12px'}}>
        <IdentifierList identifiers={formula.identifiers} changeIdentifierValue={changeIdentifierValue} changeIdentifierDataType={changeIdentifierDataType} changeIdentifierOptions={changeIdentifierOptions} />
        <FormulaInput changeFormula={changeFormula} />
        <EvalOutput formula={formula} />
      </Grid>
    )
  }
}

export default connect(
  ({formula}) => ({formula}),
  (dispatch) => (bindActionCreators({changeFormula, changeIdentifierValue, changeIdentifierDataType, changeIdentifierOptions}, dispatch))
)(FormulonApp)
