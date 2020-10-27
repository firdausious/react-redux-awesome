import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

// prepare middleware
const middlewares = [thunk, logger]

// mapping store
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)

export default store

// const initialState = {
//   counter: 0,
//   balance: 0,
//   credits: 0
// }
// const myReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         counter: state.counter + 1
//       }
//     case "DECREMENT":
//       return {
//         counter: state.counter - 1
//       }
//   }
// }


// const actionIncrement = {
//   type: 'INCREMENT'
// }

// subscribe buat listen perubahan
// store.subscribe(() => console.log(store.getState()))

// store.dispatch(actionIncrement)
// store.dispatch(actionIncrement)
// store.dispatch(actionIncrement)
// store.dispatch(actionIncrement)

