import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts(state, { payload }) {
      // BEGIN (write your solution here)
      const { entities, ids } = payload;
      state.entities = entities;
      state.ids = ids;
      // END
    },
  },
});

export const { actions } = postsSlice;
export default postsSlice.reducer;
