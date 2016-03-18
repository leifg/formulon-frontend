import FormulonApp from './FormulonApp';
import React from 'react';

import { Provider } from 'react-redux';
import configureStore from '../configureStore'

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="page-header">
          <h1>Formulon <small>a Salesforce Formula Parser</small></h1>
        </div>
        <div className="row">
          <Provider store={store}>
            <FormulonApp />
          </Provider>
        </div>
      </div>
    );
  }
}
