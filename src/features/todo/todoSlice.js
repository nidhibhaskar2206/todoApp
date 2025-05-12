```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { text } = action.payload;
      if (typeof text !== 'string' || text.trim() === '') {
        return state; 
      }
      const newTask = { id: Date.now(), text }; 
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
```
