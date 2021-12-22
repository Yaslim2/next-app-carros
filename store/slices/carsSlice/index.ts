import { createSlice } from "@reduxjs/toolkit";
import { CarSliceState } from "./types";
import { carsJson } from "@assets/index";

const initialState: CarSliceState = {
  cars: carsJson,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
});

export default carsSlice.reducer;
