import React from 'react';

const PostSearch = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Rechercher un post..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default PostSearch;
