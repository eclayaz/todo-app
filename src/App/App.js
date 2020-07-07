import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../helpers';
import { alertActions, userActions } from '../actions';
import { PrivateRoute } from '../components';
import { LoginPage, HomePage, RegisterPage, ProfilePage } from '../Pages';

import './App.css';

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('dd');

  //   const user = {
  //     firstName: 'Nadeesha',
  //     lastName: 'Dilruwan',
  //     username: 'admin',
  //     password: 'admin',
  //   };
  //   dispatch(userActions.register(user));
  // }, []);

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, [dispatch]);

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2 page">
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <PrivateRoute exact path="/profile" component={ProfilePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={RegisterPage} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export { App };
