import React from 'react';
import { useSelector } from 'react-redux';
import SideBar from '../components';

function ProfilePage() {
  const user = useSelector((state) => state.authentication.user);
  console.log('p');
  return (
    <div style={{ display: 'flex' }}>
      <SideBar user={user} />
      <h3>Profile page</h3>
    </div>
  );
}

export { ProfilePage };
