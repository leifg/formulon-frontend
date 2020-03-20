import React, { useReducer, useEffect } from 'react';

import { formulaReducer, initialState } from './reducers/formula'
import { FormulaStateContext, FormulaDispatchContext } from './contexts'
import { evalFormula } from './utils/formulonUtils'

import Grid from './components/lightning/Grid';
import Column from './components/lightning/Column';
import Row from './components/lightning/Row';

import Examples from './components/Examples';
import Header from './components/Header';
import Footer from './components/Footer';
import FormulaInput from './components/FormulaInput';
import FormulaOutput from './components/FormulaOutput';
import IdentifierList from './components/IdentifierList';

import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(formulaReducer, initialState)

  useEffect(() => {
    const [parsedFormula, error] = evalFormula(state.inputFormula, state.identifiers)
    dispatch({ type: 'UPDATE_FORMULA_RESULT', parsedFormula: parsedFormula, error })
  }, [dispatch, state.inputFormula, state.identifiers])

  return (
      <div>
        <Header />
        <FormulaDispatchContext.Provider value={dispatch}>
          <FormulaStateContext.Provider value={state}>
            <Grid className='App-content'>
              <Row padded>
                <Column sizeLarge={12} sizeMedium={12} sizeSmall={12}>
                  <IdentifierList />
                </Column>
              </Row>
              <Row padded>
                <Column sizeLarge={12} sizeMedium={12} sizeSmall={12}>
                  <FormulaInput />
                </Column>
              </Row>
              <Row padded>
                <Column sizeLarge={12} sizeMedium={12} sizeSmall={12}>
                  <FormulaOutput />
                </Column>
              </Row>
              <Row padded>
                <Column sizeLarge={12} sizeMedium={12} sizeSmall={12}>
                  <Examples />
                </Column>
              </Row>
              <Row padded>
                <Column sizeLarge={12} sizeMedium={12} sizeSmall={12}>
                  <Footer />
                </Column>
              </Row>
            </Grid>
          </FormulaStateContext.Provider>
        </FormulaDispatchContext.Provider>
      </div>
  );
}

export default App;
