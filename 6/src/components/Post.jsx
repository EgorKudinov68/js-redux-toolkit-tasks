import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment.jsx';

const Post = ({ post }) => {
  const author = useSelector((state) => {
    // BEGIN (write your solution here)
    const user = state.usersReducer.entities[post.author];
    return user || { name: '' };
    // END
  });

  return (
    <div className="card">
      <div className="card-header">
        {`${post.body} - ${author.name}`}
      </div>
      <div className="card-body">
        {post.comments.map((commentId) => <Comment key={commentId} commentId={commentId} />)}
      </div>
    </div>
  );
};

export default Post;
