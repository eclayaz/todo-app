import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.authentication.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} user={user} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};
