import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./postsSlice.js";
import usersReducer from "./usersSlice.js";
// BEGIN (write your solution here)
import commentsReducer from "./commentsSlice.js";
// END

export default configureStore({
  reducer: {
    usersReducer,
    postsReducer,
    // BEGIN (write your solution here)
    commentsReducer,
    // END
  },
});
