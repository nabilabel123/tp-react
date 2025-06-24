import { useState, useRef, useCallback, useContext, useMemo } from "react";
import usePosts from "./hooks/usePosts";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import PostList from "./components/PostList";
import PostSearch from "./components/PostSearch";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "./context/ThemeContext";
import "./App.css"; // Assure-toi d'avoir un fichier CSS pour les styles

export default function App() {
  const { posts, loading, loadMore } = usePosts(); // Assure-toi que usePosts gère loadMore
  const [filteredPosts, setFilteredPosts] = useState([]);
  const { theme } = useContext(ThemeContext);
  const loadMoreRef = useRef();

  const postsToDisplay = useMemo(() => (
    filteredPosts.length > 0 ? filteredPosts : posts
  ), [filteredPosts, posts]);

  const handleSearch = useCallback((filtered) => {
    setFilteredPosts(filtered);
  }, []);

  useIntersectionObserver(loadMoreRef, () => {
    if (!loading) loadMore();
  });

  return (
    <div className={`app-container ${theme}-theme`}>
      <h1>Liste des Posts</h1>
      <ThemeToggle />
      <PostSearch posts={posts} onSearch={handleSearch} />
      <PostList posts={postsToDisplay} />
      <div ref={loadMoreRef} style={{ height: "20px" }}></div>
      {loading && <p>Chargement...</p>}
    </div>
  );
}
