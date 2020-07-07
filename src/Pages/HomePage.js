import React from 'react';
import { TodoPage } from './';
import { PageTemplate } from '../components';

function HomePage({ user }) {
  return (
    <PageTemplate user={user}>
      <TodoPage />
    </PageTemplate>
  );
}

export { HomePage };
