import React, { useReducer, useEffect } from 'react';

import { formulaReducer, initialState } from './reducers/formula'
import { FormulaStateContext, FormulaDispatchContext } from './contexts'

import Grid from './components/lightning/Grid';
import Column from './components/lightning/Column';
import Row from './components/lightning/Row';

import Examples from './components/Examples';
import Header from './components/Header';
import FormulaInput from './components/FormulaInput';
import FormulaOutput from './components/FormulaOutput';
import IdentifierList from './components/IdentifierList';

import './App.css';

const formulaWorker = () => require('workerize-loader!./workers/formulaWorker.js') // eslint-disable-line import/no-webpack-loader-syntax

const App = () => {
  const [state, dispatch] = useReducer(formulaReducer, initialState)

  useEffect(() => {
    // Tests won't work if require is executed on top level
    // Advice on workerize-loader does not seem to work: https://github.com/developit/workerize-loader#testing
    const workerInstance = formulaWorker()()

    dispatch({ type: 'REGISTER_WORKER', worker: workerInstance })

    workerInstance.parseFormula(state.inputFormula, state.identifiers).then(result => {
      dispatch({ type: 'UPDATE_FORMULA_RESULT', parsedFormula: result[0], error: result[1] })
      dispatch({ type: 'TERMINATE_WORKERS', worker: workerInstance })
    })
  }, [dispatch, state.inputFormula, state.identifiers])

  return (
      <div>
        <Header />
        <div class="slds-panel__body">
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
            </Grid>
          </FormulaStateContext.Provider>
        </FormulaDispatchContext.Provider>
        </div>
      </div>
  );
}

export default App;
