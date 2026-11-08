import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice.js";
import commentsReducer from "./commentsSlice.js";
import usersReducer from "./usersSlice.js";

// BEGIN (write your solution here)
export default configureStore({
  reducer: {
    usersReducer,
    postsReducer,
    commentsReducer,
  },
});
// END
