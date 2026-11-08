import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// BEGIN (write your solution here)
const postsAdapter = createEntityAdapter();
const postsSlice = createSlice({
  name: "posts",
  initialState: postsAdapter.getInitialState(),
  reducers: {
    setPosts: postsAdapter.setAll,
    addPost: postsAdapter.addOne,
    addPosts: postsAdapter.addMany, 
    updatePost: postsAdapter.updateOne,
  },
});

export const { actions } = postsSlice;
export const selectors = postsAdapter.getSelectors((state) => state.postsReducer);
export default postsSlice.reducer;
// END
