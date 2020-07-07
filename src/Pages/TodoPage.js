import React from 'react';
import AddTodo from '../components/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoListFooter from './TodoListFooter';

function TodoPage() {
  return (
    <div className="col-lg-8 offset-lg-2">
      <h3>Todo page</h3>
      <hr />
      <AddTodo />
      <VisibleTodoList />
      <TodoListFooter />
    </div>
  );
}

export { TodoPage };
