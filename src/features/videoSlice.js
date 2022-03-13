import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
}

const videoSlice = createSlice({
  name: "videoDetails",
  initialState,
  reducers: {
    updateVideoDetails: (state, action) => {
      state.value = action.payload;
    },
    clearVideoDetails: (state) => {
      state.value = {};
    },
  },
});

export const {updateVideoDetails, clearVideoDetails} = videoSlice.actions;

export {videoSlice};
export default videoSlice.reducer;