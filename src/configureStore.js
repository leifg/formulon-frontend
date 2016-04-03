import {combineReducers, compose, createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import * as reducers from './reducers'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = compose(
  applyMiddleware(thunkMiddleware),
  applyMiddleware(loggerMiddleware),
  typeof window === 'object' && typeof window.devToolsExtension !== undefined ? window.devToolsExtension() : (f) => f
)(createStore)

export default function configureStore () {
  return createStoreWithMiddleware(combineReducers(reducers))
}
