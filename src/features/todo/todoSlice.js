```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  nextId: 1, 
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      
      const newTaskText = action.payload.text;
      if (typeof newTaskText !== 'string' || newTaskText.trim() === '') {
        console.error("Error: Invalid task text.  Must be a non-empty string.");
        return; 
      }

      return {
        ...state,
        tasks: [...state.tasks, { id: state.nextId++, text: newTaskText }], 
      };
    },
    deleteTodo: (state, action) => {
      
      if (typeof action.payload !== 'number') {
        console.error("Error: Invalid task ID. Must be a number.");
        return; 
      }
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
```

**Improvements:**

* **Input Validation:** The `addTodo` reducer now checks if `action.payload.text` is a non-empty string.  If not, it logs an error and does nothing, preventing the addition of invalid tasks.  The `deleteTodo` reducer now checks if `action.payload` is a number.
* **Unique IDs:** Instead of a hardcoded ID (22), a `nextId` counter is introduced in the `initialState` to generate unique IDs for each new task, preventing ID collisions.  This is crucial for reliable task management.
* **Error Handling:** Error messages are logged to the console to provide better debugging information when invalid input is detected.  This makes it easier to identify and resolve issues.
* **Clearer Payload Structure:** The code now expects the `addTodo` action to include a payload with a `text` property, making the expected input more explicit.

This revised code is significantly more secure and robust because it handles invalid user input gracefully, preventing potential vulnerabilities and data corruption.  Remember that while this addresses the specific vulnerability in the provided code, a comprehensive security review of the entire application is always recommended.
