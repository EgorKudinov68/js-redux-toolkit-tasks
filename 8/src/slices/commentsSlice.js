import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { actions as usersActions } from "./usersSlice.js";
import { actions as postsActions } from "./postsSlice.js";

const commentsAdapter = createEntityAdapter();

const initialState = commentsAdapter.getInitialState();

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComments: commentsAdapter.addMany,
    addComment: commentsAdapter.addOne,
  },
  // BEGIN (write your solution here)
  extraReducers: (builder) => {
  // При удалении пользователя удаляем его комментарии
    builder.addCase(usersActions.removeUser, (state, { payload }) => {
      const userId = typeof payload === 'object' ? payload.id : payload;
      const remainingComments = Object.values(state.entities).filter(
        (comment) => comment.author !== userId
      );
      commentsAdapter.setAll(state, remainingComments);
    });

    // При удалении поста удаляем все комментарии этого поста
    builder.addCase(postsActions.removePost, (state, { payload }) => {
      const postCommentIds = payload.comments || [];
      const remainingComments = Object.values(state.entities).filter(
        (comment) => !postCommentIds.includes(comment.id)
      );
      commentsAdapter.setAll(state, remainingComments);
    });
  },
  // END
});

export const { actions } = commentsSlice;
export const selectors = commentsAdapter.getSelectors(
  (state) => state.comments
);
export default commentsSlice.reducer;
