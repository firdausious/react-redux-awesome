import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import apiClientMiddleware from './middlewares/apiClientMiddleware'
import reducer from './modules/reducers'

// prepare middleware
const middlewares = [
  apiClientMiddleware(fetch),
  thunk,
  logger,
]

// mapping store
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)

export default store
