import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userActions } from '../actions';
import { Menu } from '../components';
import { TodoPage } from './';

function HomePage() {
  // const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(userActions.getAll());
  // }, []);

  return (
    <div className="col-lg-8 offset-lg-2">
      <Menu />
      <h1>Hi {user.firstName}!</h1>
      <TodoPage />
      <p>
        <Link to="/login">Logout</Link>
      </p>
    </div>
  );
}

export { HomePage };
