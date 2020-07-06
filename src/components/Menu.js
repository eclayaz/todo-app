import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="links">
      <Link to={`/`} className="link">
        Home
      </Link>
      <Link to={`/profile`} className="link">
        Profile
      </Link>
    </div>
  );
}

export { Menu };
