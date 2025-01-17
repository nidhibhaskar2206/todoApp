import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks) || []; // Fallback for undefined
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    console.log("tasks", tasks),
    (
      <div className="tasklist">
        <div className="display-tasks">
          <h3>Your tasks:</h3>
          <ul className="tasks">
            {tasks.length > 0 &&
              tasks.map((task) => (
                <li className="task" key={task.id}>
                  {task.text}
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(task.id)}
                  >
                    delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    )
  );
};

export default TaskList;
