import { useTheme } from "../context/ThemeContext";

export default function Theme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="theme-page">
      <h2>Theme</h2>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
