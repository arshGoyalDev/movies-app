import { configureStore } from "@reduxjs/toolkit";

import videoReducer from "../features/videoSlice";
import reviewReducer from "../features/reviewSlice";

const store = configureStore({
  reducer: {
    videoDetails: videoReducer,
    review: reviewReducer,
  },
});

export { store };
