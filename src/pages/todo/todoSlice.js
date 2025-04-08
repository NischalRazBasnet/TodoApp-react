import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});
