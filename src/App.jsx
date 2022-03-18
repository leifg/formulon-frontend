import React, { useReducer, useEffect } from 'react'
import { useDebounce } from 'use-debounce'

import { formulaReducer, initialState } from './reducers/formula'
import { FormulaStateContext, FormulaDispatchContext } from './contexts'

import Grid from './components/lightning/Grid'
import Column from './components/lightning/Column'
import Row from './components/lightning/Row'

import Examples from './components/Examples'
import Header from './components/Header'
import FormulaInput from './components/FormulaInput'
import FormulaOutput from './components/FormulaOutput'
import IdentifierList from './components/IdentifierList'

import FormulaWorker from './workers/formulaWorker.js?worker'

import './App.css'

// const formulaWorker = () => require('workerize-loader!./workers/formulaWorker.js') // eslint-disable-line import/no-webpack-loader-syntax

const App = () => {
  const [state, dispatch] = useReducer(formulaReducer, initialState)
  const [debouncedFormula] = useDebounce(state.inputFormula, 300)
  const [debouncedIdentifiers] = useDebounce(state.identifiers, 300)

  useEffect(() => {
    // Tests won't work if require is executed on top level
    // Advice on workerize-loader does not seem to work: https://github.com/developit/workerize-loader#testing
    const workerInstance = new FormulaWorker()

    dispatch({ type: 'REGISTER_WORKER', worker: workerInstance })

    workerInstance.onmessage = (result) => {
      dispatch({ type: 'UPDATE_FORMULA_RESULT', parsedFormula: result.data[0], error: result.data[1] })
      dispatch({ type: 'TERMINATE_WORKERS' })
    }

    workerInstance.postMessage([debouncedFormula, debouncedIdentifiers]);
  }, [dispatch, debouncedFormula, debouncedIdentifiers])

  return (
      <div>
        <div className='slds-panel__body'>
          <FormulaDispatchContext.Provider value={dispatch}>
          <FormulaStateContext.Provider value={state}>
            <Header />
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
  )
}

export default App
