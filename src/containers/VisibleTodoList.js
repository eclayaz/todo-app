import { connect } from 'react-redux';
import { todoActions } from '../actions';
import { TodoList } from '../components';
import { todoVisibilityFilters } from '../constants';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case todoVisibilityFilters.SHOW_ALL:
      return todos;
    case todoVisibilityFilters.SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case todoVisibilityFilters.SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todo, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(todoActions.toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
