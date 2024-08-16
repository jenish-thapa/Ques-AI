import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import projectReducer from "./projectSlice";
import currentProjectReducer from "./currentProjectSlice";
import transcriptReducer from "./transcriptSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    project: projectReducer,
    currentProject: currentProjectReducer,
    transcript: transcriptReducer,
  },
});

export default store;
