import React from 'react';
import { PageTemplate } from '../components';
import AddTodo from '../components/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoListFooter from './TodoListFooter';

function HomePage({ user }) {
  return (
    <PageTemplate user={user}>
      <div className="row home-page">
        <h3>Home Page</h3>
        <AddTodo />
        <VisibleTodoList />
        <TodoListFooter />
      </div>
    </PageTemplate>
  );
}

export { HomePage };
