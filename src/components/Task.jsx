import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const Task = () => {
  const tasks = useSelector((state) => state.tasks) || [];
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function addNewTask() {
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch(addTodo(task));
      console.log(tasks);
      inputRef.current.value = "";
    }
  }

  return (
    <div className="task-component">
      <div className="add-task">
        <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className="taskInput"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            addNewTask();
          }}
        >
          Add task
        </button>
      </div>
    </div>
  );
};

export default Task;
