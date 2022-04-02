import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "../features/themeSlice";
import videoReducer from "../features/videoSlice";
import profileReducer from "../features/profileSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    videoDetails: videoReducer,
    profileDetails: profileReducer,
  },
});

export { store };
