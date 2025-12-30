import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        task: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action) => {
      return state.filter((ele) => ele.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, task } = action.payload;
      const exist = state.find((ele) => ele.id === id);
      if (exist) {
        exist.task = task;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
