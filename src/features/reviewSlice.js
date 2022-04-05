import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    showReview: (state, action) => {
      state.value = action.payload;
    },
    hideReview: (state, action) => {
      state.value = {};
    },
  },
});

export const { showReview, hideReview } = reviewSlice.actions;
export default reviewSlice.reducer;
