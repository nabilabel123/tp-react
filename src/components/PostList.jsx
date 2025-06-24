export default function PostList({ posts }) {
  if (posts.length === 0) {
    return <p style={{ textAlign: "center" }}>Aucun post trouvé.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {posts.map(post => (
        <li key={post.id} style={{
          backgroundColor: "#fff",
          margin: "10px auto",
          padding: "15px",
          borderRadius: "8px",
          maxWidth: "600px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <h3 style={{ color: "#007bff" }}>{post.title}</h3>
          <p style={{ color: "#555" }}>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
