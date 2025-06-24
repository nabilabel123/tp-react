import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const emoji = theme === "light" ? "🌞" : "🌙";
  const label = theme === "light" ? "Mode clair" : "Mode sombre";

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 20px",
        marginBottom: "20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#333" : "#eee",
        color: theme === "light" ? "#fff" : "#000",
        fontSize: "1.2rem"
      }}
    >
      {emoji} {label}
    </button>
    
  );
}
