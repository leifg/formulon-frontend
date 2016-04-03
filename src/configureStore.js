import {combineReducers, compose, createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import * as reducers from './reducers'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  applyMiddleware(loggerMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
)(createStore)

export default function configureStore () {
  return createStoreWithMiddleware(combineReducers(reducers))
}
