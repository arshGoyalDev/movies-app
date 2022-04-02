import { createSlice } from "@reduxjs/toolkit";

const preferredTheme = () => {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return true;
  } else {
    return false;
  }
};

const initialState = {
  value: preferredTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDark: (state) => {
      state.value = true;
    },
    setLight: (state) => {
      state.value = false;
    },
  },
});

export const { setDark, setLight } = themeSlice.actions;
export default themeSlice.reducer;
