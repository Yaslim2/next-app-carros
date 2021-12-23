import { createSlice } from "@reduxjs/toolkit";
import { UiSliceState } from "./types";

const initialState: UiSliceState = {
  isToggle: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.isToggle = !state.isToggle;
    },
  },
});

export const { toggle } = uiSlice.actions;

export default uiSlice.reducer;
