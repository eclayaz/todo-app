import React, { useState } from 'react';
import { connect } from 'react-redux';
import { todoActions } from '../actions';

const AddTodo = ({ dispatch }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    dispatch(todoActions.create(value));
    setValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Todo:</label>
          <input
            type="text"
            className="form-control"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
