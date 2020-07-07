import React from 'react';
import FilterLink from '../containers/FilterLink';
import { todoVisibilityFilters } from '../constants';

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={todoVisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={todoVisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={todoVisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
);

export default Footer;
