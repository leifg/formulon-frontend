import React, {useReducer} from 'react';

import { formulaReducer, initialState } from './reducers/formula'

import { AppLauncher, IconSettings, GlobalNavigationBar, GlobalNavigationBarRegion } from '@salesforce/design-system-react';

import Grid from './components/lightning/Grid';
import Column from './components/lightning/Column';
import Row from './components/lightning/Row';

import Examples from './components/Examples';
import Footer from './components/Footer';
import FormulaInput from './components/FormulaInput';
import FormulaOutput from './components/FormulaOutput';
import IdentifierList from './components/IdentifierList';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(formulaReducer, initialState)

  return (
      <div>
        <IconSettings iconPath='/assets/icons'>
          <GlobalNavigationBar>
            <GlobalNavigationBarRegion region="primary">
              <AppLauncher triggerName="Formulon" />
            </GlobalNavigationBarRegion>
          </GlobalNavigationBar>
        </IconSettings>
        <Grid className='App-content'>
          <Row padded>
            <Column sizeLarge={12} sizeMedium={12} sizeSmall={12}>
              <IdentifierList identifiers={ state.identifiers } dispatch={dispatch} />
            </Column>
          </Row>
          <Row padded>
            <Column sizeLarge={12} sizeMedium={12} sizeSmall={12}>
              <FormulaInput dispatch={dispatch} inputFormula={state.inputFormula} errorText={state.lastError} />
            </Column>
          </Row>
          <Row padded>
            <Column sizeLarge={12} sizeMedium={12} sizeSmall={12}>
              <FormulaOutput value={ state.result } />
            </Column>
          </Row>
          <Row padded>
            <Column sizeLarge={12} sizeMedium={12} sizeSmall={12}>
              <Examples dispatch={dispatch}/>
            </Column>
          </Row>
          <Row padded>
            <Column sizeLarge={12} sizeMedium={12} sizeSmall={12}>
              <Footer />
            </Column>
          </Row>
        </Grid>
      </div>
  );
}

export default App;
