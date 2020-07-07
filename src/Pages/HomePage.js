import React from 'react';
import { useSelector } from 'react-redux';
import { TodoPage } from './';
import SideBar from '../components';

function HomePage() {
  const user = useSelector((state) => state.authentication.user);
  return (
    <div style={{ display: 'flex' }}>
      <SideBar user={user} />
      <TodoPage />
    </div>
  );
}

export { HomePage };
