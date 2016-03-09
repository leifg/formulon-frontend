import FormulonApp from './FormulonApp';
import React from 'react';

import {Provider} from 'react-redux';
import configureStore from '../configureStore'

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Formulon</h1>
        <Provider store={store}>
          <FormulonApp />
        </Provider>
      </div>
    );
  }
}
