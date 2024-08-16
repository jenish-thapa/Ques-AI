import { createSlice } from "@reduxjs/toolkit";

const currentProjectSlice = createSlice({
  name: "currentProject",
  initialState: {
    currentProject: null,
  },
  reducers: {
    setCurrentProject: (state, action) => {
      state.currentProject = action.payload;
    },
  },
});

export const { setCurrentProject } = currentProjectSlice.actions;
export default currentProjectSlice.reducer;
