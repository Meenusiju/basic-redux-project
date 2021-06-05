import { createStore, applyMiddleware } from 'redux'
import combinedReducer from './combinedReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

const store = createStore(combinedReducer, composeWithDevTools(applyMiddleware(logger)))

export default store;