import React, { useState } from 'react';
import './App.css';
import usePosts from './hooks/usePosts';
import useDebounce from './hooks/useDebounce';
import useLocalStorage from './hooks/useLocalStorage';
import PostList from './components/PostList';
import PostSearch from './components/PostSearch';
import LoadingSpinner from './components/LoadingSpinner';
import ThemeToggle from './components/ThemeToggle';
import PostDetails from './components/PostDetails';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 400);

  const { posts, loading, setPage, hasMore } = usePosts(debouncedSearch);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedTag, setSelectedTag] = useState('');

  const filteredPosts = posts.filter(
    post => selectedTag === '' || post.tags?.includes(selectedTag)
  );

  const allTags = [...new Set(posts.flatMap(p => p.tags || []))];

  return (
    <div className="App">
      <ThemeToggle />
      <h1>Blog Posts</h1>

      <PostSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {/* Liste des tags pour filtrer */}
      <div className="tags-filter">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            style={{ fontWeight: tag === selectedTag ? 'bold' : 'normal' }}
          >
            {tag}
          </button>
        ))}
        {selectedTag && (
          <button onClick={() => setSelectedTag('')}>Réinitialiser</button>
        )}
      </div>

      <PostList
        posts={filteredPosts}
        loading={loading}
        loadMore={() => setPage(prev => prev + 1)}
        hasMore={hasMore}
        onSelect={setSelectedPost}
      />

      <PostDetails post={selectedPost} onClose={() => setSelectedPost(null)} />
    </div>
  );
};

export default App;
