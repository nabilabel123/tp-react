import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

export default function PostSearch({ posts, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  const filteredPosts = posts.filter(post => {
    const matchesText = post.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
                        post.body.toLowerCase().includes(debouncedSearchTerm.toLowerCase());

    const matchesTag = selectedTag ? post.tags?.includes(selectedTag) : true;

    return matchesText && matchesTag;
  });

  useEffect(() => {
    onSearch(filteredPosts);
  }, [debouncedSearchTerm, selectedTag]);

  const uniqueTags = [...new Set(posts.flatMap(post => post.tags || []))];

  return (
    <>
      <input
        type="text"
        placeholder="Recherche par titre ou contenu"
        value={searchTerm}
        onChange={handleChange}
      />
      <select onChange={handleTagChange} value={selectedTag}>
        <option value="">-- Tous les tags --</option>
        {uniqueTags.map(tag => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>
    </>
  );
}
