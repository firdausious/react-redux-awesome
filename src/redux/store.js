import { createStore } from 'redux'

const myReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1
    case "DECREMENT":
      return state - 1
    default:
      return 0
  }
}

const store = createStore(myReducer)

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

