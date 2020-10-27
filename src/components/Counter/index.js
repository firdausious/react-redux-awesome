import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import {
  increment as incrementAction,
  decrement as decrementAction,
} from "../../redux/modules/counter";

const Counter = ({ count, increment, decrement }) => (
  <div>
    <h2>{count}</h2>

    <button onClick={() => increment()}>+</button>
    <button onClick={() => decrement()}>-</button>
  </div>
);

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    count: state?.counter?.count,
  }),
  (dispatch) => ({
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction()),
  })
)(Counter);
