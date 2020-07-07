import { todoConstants } from '../constants';
import { alertActions } from '.';
import { history } from '../helpers';

export const todoActions = {
  create,
  // update,
  // delete: _delete,
  getAll,
  // getOne,
};

let id = 1;

function create(todo) {
  return (dispatch) => {
    dispatch(request({ id, text: todo }));
    dispatch(success());
    id++;
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

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
});
