import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
  entities: {},
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    setComments(state, { payload }) {
      // BEGIN (write your solution here)
      const { entities, ids } = payload;
      state.entities = entities;
      state.ids = ids;
      // END
    },
  },
});

export const { actions } = commentsSlice;
export default commentsSlice.reducer;
