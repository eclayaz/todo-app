import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SideBar({ user }) {
  return (
    <div className="side-nav">
      <h5 className="title-text">Hello {user.firstName}!</h5>
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

SideBar.propTypes = {
  user: PropTypes.object.isRequired,
};
