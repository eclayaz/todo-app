import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users, image } from './users.reducer';
import { alert } from './alert.reducer';
import { todo, visibilityFilter } from './todo.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  todo,
  visibilityFilter,
  image,
});

export default rootReducer;
