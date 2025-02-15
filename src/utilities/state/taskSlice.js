import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
  },
  reducers: {
    storeTask: (state, action) => {
      state.task.push(action.payload);
    },
    removeTask: () => {},
  },
});
export const { storeTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
