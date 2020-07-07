import { todoConstants, todoVisibilityFilters } from '../constants';

export const todo = (state = [], action) => {
  switch (action.type) {
    case todoConstants.CREATE_REQUEST:
      return [
        ...state,
        {
          id: action.todo.id,
          text: action.todo.text,
          completed: false,
        },
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export const visibilityFilter = (
  state = todoVisibilityFilters.SHOW_ALL,
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};
