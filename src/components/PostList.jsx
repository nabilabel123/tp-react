import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const PostList = ({ posts, onPostClick, loadMore, loading, hasMore }) => {
  const bottomRef = useIntersectionObserver(() => {
    if (!loading && hasMore) loadMore();
  });

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} onClick={() => onPostClick(post)} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
      <div ref={bottomRef} style={{ height: '20px' }} />
      {loading && <p>Chargement...</p>}
    </div>
  );
};

export default PostList;
