import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./slices";

const store = configureStore({
  reducer: {
    ui: uiSlice,
  },
});

export default store;
