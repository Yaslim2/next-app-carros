import { configureStore } from "@reduxjs/toolkit";
import carsSlice from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    car: carsSlice,
  },
});

export default store;
