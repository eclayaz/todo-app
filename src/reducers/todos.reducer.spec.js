import { todo } from './todo.reducer';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todo(undefined, {})).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    expect(
      todo([], {
        type: 'TODO_CREATE_REQUEST',
        todo: { text: 'todo1', id: '0' },
      })
    ).toEqual([
      {
        text: 'todo1',
        completed: false,
        id: '0',
      },
    ]);

    expect(
      todo(
        [
          {
            text: 'td1',
            completed: false,
            id: '0',
          },
        ],
        {
          type: 'TODO_CREATE_REQUEST',
          todo: { text: 'td2', id: '1' },
        }
      )
    ).toEqual([
      {
        text: 'td1',
        completed: false,
        id: '0',
      },
      {
        text: 'td2',
        completed: false,
        id: '1',
      },
    ]);
  });

  it('should handle TOGGLE_TODO', () => {
    expect(
      todo(
        [
          {
            text: 'td1',
            completed: false,
            id: 1,
          },
          {
            text: 'td2',
            completed: false,
            id: 0,
          },
        ],
        {
          type: 'TOGGLE_TODO',
          id: 1,
        }
      )
    ).toEqual([
      {
        text: 'td1',
        completed: true,
        id: 1,
      },
      {
        text: 'td2',
        completed: false,
        id: 0,
      },
    ]);
  });
});
