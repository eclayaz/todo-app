import { v4 as uuidv4 } from 'uuid';
import { todoConstants } from '../constants';
import { alertActions } from '.';
import { history } from '../helpers';

export const todoActions = {
  create,
  getAll,
  setVisibilityFilter,
  toggleTodo,
};

function create(todo) {
  return (dispatch) => {
    dispatch(request({ id: uuidv4(), text: todo }));
    dispatch(success());
    history.push('/');
    dispatch(alertActions.success('Create Todo successful'));
  };

  function request(todo) {
    return { type: todoConstants.CREATE_REQUEST, todo };
  }
  function success(todo) {
    return { type: todoConstants.CREATE_SUCCESS, todo };
  }
}

function getAll(todo) {
  return (dispatch) => {
    dispatch(request(todo));
    dispatch(success());
    history.push('/');
    dispatch(alertActions.success('Create Todo successful'));
  };

  function request(todo) {
    return { type: todoConstants.CREATE_REQUEST, todo };
  }
  function success(todo) {
    return { type: todoConstants.CREATE_SUCCESS, todo };
  }
}

function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  };
}

function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
}
