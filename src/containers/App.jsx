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
        <Row>
          <Col className='slds-page-header'>
            <h1>Formulon <small>a Salesforce Formula Parser</small></h1>
          </Col>
        </Row>
        <Provider store={store}>
          <FormulonApp />
        </Provider>
      </Grid>
    )
  }
}
