import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SideBar({ user }) {
  return (
    <div
      style={{
        padding: '10px',
        width: '150px',
        background: '#f0f0f0',
        marginRight: '50px',
      }}
      className="sidenav"
    >
      <h5>Hi {user.firstName}</h5>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
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
