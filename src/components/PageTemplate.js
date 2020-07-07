import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../components';

export const PageTemplate = function ({ children, user }) {
  return (
    <div className="page-template">
      <SideBar user={user} />
      {children}
    </div>
  );
};

PageTemplate.propTypes = {
  user: PropTypes.object.isRequired,
};
