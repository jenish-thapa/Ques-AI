import { createSlice } from "@reduxjs/toolkit";

const currentTranscriptSlice = createSlice({
  name: "currentTranscript",
  initialState: {
    currentTranscript: null,
  },
  reducers: {
    setCurrentTranscript: (state, action) => {
      state.currentTranscript = action.payload;
    },
  },
});

export const { setCurrentTranscript } = currentTranscriptSlice.actions;
export default currentTranscriptSlice.reducer;
