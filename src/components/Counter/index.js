import React from 'react'
import { connect } from 'react-redux'

import { incrementAction, decrementAction } from '../../redux/actions'

const Counter = ({ counter, increment, decrement }) => (
  <div>
    <h2>{counter}</h2>

    <button onClick={() => increment()}>+</button>
    <button onClick={() => decrement()}>-</button>
  </div>
)

const mapStateToProps = state => ({
  counter: state
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementAction),
  decrement: () => dispatch(decrementAction)
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)



