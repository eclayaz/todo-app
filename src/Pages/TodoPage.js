import React from 'react';
import AddTodo from '../components/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoListFooter from './TodoListFooter';

function TodoPage() {
  return (
    <div>
      <h3>Todo page</h3>
      <hr />
      <AddTodo />
      <VisibleTodoList />
      <TodoListFooter />
    </div>
  );
}

export { TodoPage };
