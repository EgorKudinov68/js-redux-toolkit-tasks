import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post.jsx';

const Posts = () => {
  // BEGIN (write your solution here)
  const posts = useSelector((state) =>
    state.postsReducer.ids.map((id) => state.postsReducer.entities[id])
  );

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
  // END
};

export default Posts;
