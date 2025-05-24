import { useState, useEffect } from 'react';
import axios from 'axios';

const usePosts = (searchTerm = '') => {
  const [posts, setPosts] = useState([]);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setPosts([]); // reset on new search
    setPage(1);
  }, [searchTerm]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://dummyjson.com/posts', {
        params: { limit, skip: (page - 1) * limit },
      });

      const filtered = res.data.posts.filter(
        post =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.body.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setPosts(prev => [...prev, ...filtered]);
      setHasMore(res.data.total > page * limit);
      setLoading(false);
    };

    fetchPosts();
  }, [page, searchTerm]);

  return { posts, loading, setPage, hasMore };
};

export default usePosts;
