import React from 'react';
import Spinner from './Spinner.jsx';
import TodoForm from './TodoForm.jsx';
// BEGIN (write your solution here)
import {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
} from "../services/tasksApi.js";
// END

const TodoBox = () => {
  // BEGIN (write your solution here)
  const { data: tasks = [], isLoading } = useGetTasksQuery();
  const [addTask] = useAddTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  // END

  const handleDeleteTask = (event, id) => {
    event.preventDefault();
    // BEGIN (write your solution here)
    deleteTask(id);
    // END
  };

  const handleSubmitForm = (event, newTaskText) => {
    event.preventDefault();
    // BEGIN (write your solution here)
    addTask({ text: newTaskText });
    // END
  };

  const renderTodo = () => (
    <TodoForm
      submitHandler={handleSubmitForm}
    />
  );

  // BEGIN (write your solution here)
  if (isLoading) {
  return <Spinner />;
}
  // END

  return (
    <div>
      <div className="mb-3">
        {renderTodo()}
      </div>
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="row">
            <div className="col-1">
              {task.id}
            </div>
            <div className="col">
              <a href="" className="todo-task" onClick={(event) => handleDeleteTask(event, task.id)}>{task.text}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoBox;
