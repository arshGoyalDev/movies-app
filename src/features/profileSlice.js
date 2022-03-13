import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

const profileSlice = createSlice({
  name: "profileDetails",
  initialState,
  reducers: {
    updateProfileDetails: (state, action) => {
      state.value = action.payload;
    },
    clearProfileDetails: (state) => {
      state.value = {};
    },
  },
});

export const { updateProfileDetails, clearProfileDetails } = profileSlice.actions;

export { profileSlice };
export default profileSlice.reducer;
