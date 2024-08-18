import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import projectReducer from "./projectSlice";
import currentProjectReducer from "./currentProjectSlice";
import transcriptReducer from "./transcriptSlice";
import currentTranscriptReducer from "./currentTranscriptSlice";
import loaderReducer from "./loaderSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
    currentProject: currentProjectReducer,
    transcript: transcriptReducer,
    currentTranscript: currentTranscriptReducer,
    loader: loaderReducer,
  },
});

export default store;
