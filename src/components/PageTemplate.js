import React from 'react';
import SideBar from '../components';

export const PageTemplate = function ({ children, user }) {
  return (
    <div style={{ display: 'flex' }}>
      <SideBar user={user} />
      {children}
    </div>
  );
};
