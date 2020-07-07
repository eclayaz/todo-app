import {todoActions} from './index'

describe('todo actions', () => {
  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(todoActions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(todoActions.toggleTodo(1)).toEqual({
      type: 'TOGGLE_TODO',
      id: 1
    })
  })
})
