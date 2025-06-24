export default function PostDetails({ post, onClose }) {
  if (!post) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
      alignItems: "center", justifyContent: "center"
    }}>
      <div style={{
        background: "#fff", padding: 20, borderRadius: 8, maxWidth: 500
      }}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}
