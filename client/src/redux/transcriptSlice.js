import { createSlice } from "@reduxjs/toolkit";

const transcriptSlice = createSlice({
  name: "transcript",
  initialState: {
    transcript: [],
  },
  reducers: {
    setTranscript: (state, action) => {
      state.transcript = action.payload;
    },
  },
});

export const { setTranscript } = transcriptSlice.actions;
export default transcriptSlice.reducer;
