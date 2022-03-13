import { configureStore } from "@reduxjs/toolkit";

import videoReducer from "../features/videoSlice";
import profileReducer from "../features/profileSlice";

const store = configureStore({
  reducer: {
    videoDetails: videoReducer,
    profileDetails: profileReducer,
  },
});

export { store };
