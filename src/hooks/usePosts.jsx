import { useState, useEffect } from "react";

export default function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data.posts);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erreur de chargement :", err);
        setLoading(false);
      });
  }, []);

  return { posts, loading };
}
