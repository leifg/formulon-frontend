import FormulonApp from './FormulonApp'
import React from 'react'

import { Provider } from 'react-redux'
import configureStore from '../configureStore'

import { Col, Grid, Row } from 'react-lightning-design-system';

const store = configureStore()

export default class App extends React.Component {
  render () {
    return (
      <Grid frame>
        <Grid>
          <Row>
            <Col className='slds-page-header'>
              <h1>Formulon <small>a Salesforce Formula Parser</small></h1>
            </Col>
          </Row>
        </Grid>
        <Provider store={store}>
          <FormulonApp />
        </Provider>
        <Grid>
          <Row>
            <Col>
              <footer className="slds-p-around--large" role="contentinfo">
                <div className="slds-grid slds-grid--align-end">
                <p className="slds-col">powered by <a href="https://github.com/leifg/formulon" target="_blank">formulon</a> built by <a href="http://leif.io" target="_blank">Leif Gensert</a></p>
                </div>
              </footer>
            </Col>
          </Row>
        </Grid>
      </Grid>
    )
  }
}
