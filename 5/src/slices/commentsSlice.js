// BEGIN (write your solution here)
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment(state, { payload: { comment } }) {
      state.comments.push(comment);
    },
  },
});
export const { actions } = commentsSlice;
export default commentsSlice.reducer;
// END
