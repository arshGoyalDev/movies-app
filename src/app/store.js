import { configureStore } from "@reduxjs/toolkit";

import videoReducer from "../features/videoSlice";
import profileReducer from "../features/profileSlice";
import reviewReducer from "../features/reviewSlice";

const store = configureStore({
  reducer: {
    videoDetails: videoReducer,
    profileDetails: profileReducer,
    review: reviewReducer,
  },
});

export { store };
