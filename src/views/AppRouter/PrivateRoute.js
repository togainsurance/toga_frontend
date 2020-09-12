import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return !!auth.isAuthenticated ? (
    <React.Fragment>
      <Route
        {...rest}
        render={(props) => <Component auth={auth} {...props} />}
      />
    </React.Fragment>
  ) : (
    <Redirect to='/signin' />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.user,
});

export default connect(mapStateToProps)(PrivateRoute);
