import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { isLoaded, load } from "../../redux/modules/users";

const Users = ({ usersData, usersLoading, load }) => {
  useEffect(() => {
    load();
  }, [load]);

  return (
    <div style={{ padding: 20 }}>
      {usersLoading ? (
        <div>Loading.... </div>
      ) : (
        <ol>
          {usersData.map((user) => (
            <li>{user.name}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

Users.propTypes = {
  usersData: PropTypes.array.isRequired,
  usersLoading: PropTypes.bool.isRequired,
  load: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    usersData: state?.users?.data,
    usersLoading: state?.users?.loading,
    usersLoaded: state?.users?.loaded,
  }),
  (dispatch) => ({
    isLoaded: () => dispatch(isLoaded()),
    load: () => dispatch(load()),
  })
)(Users);
