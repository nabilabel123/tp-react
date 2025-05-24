import React from 'react';

const PostDetails = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="post-details">
      <button onClick={onClose}>❌ Fermer</button>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
    </div>
  );
};

export default PostDetails;
