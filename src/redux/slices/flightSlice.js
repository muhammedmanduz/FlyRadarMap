import { createSlice } from "@reduxjs/toolkit";
import { getFligths } from "../actions";

const initialState = {
  isLoading: true,
  error: null,
  flights: [],
};

const fligthSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFligths.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getFligths.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message;
    });

    builder.addCase(getFligths.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.flights = payload;
    });
  },
});

export default fligthSlice.reducer;
