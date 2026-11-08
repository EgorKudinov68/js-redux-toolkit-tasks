import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// BEGIN (write your solution here)
import { addTask } from '../slices/tasksSlice.js';
// END

const NewTaskForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    // BEGIN (write your solution here)
    e.preventDefault();
    if (!name.trim()) return;
    dispatch(addTask({ name }));
    setName('');
    // END
  };

  const onChange = (e) => setName(e.target.value);

  return (
    <form action="" className="form-inline" onSubmit={handleAddTask}>
      <div className="form-group mx-sm-3">
        <input
          type="text"
          data-testid="input"
          required
          value={name}
          onChange={onChange}
        />
      </div>
      <input type="submit" data-testid="submit" className="btn btn-primary btn-sm" value="Add" />
    </form>
  );
};

export default NewTaskForm;
