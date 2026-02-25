export default function CategoryBar({ onSelect }) {
  const categories = [
    { label: "Movies", query: "movie" },
    { label: "Series", query: "series" },
    { label: "Anime", query: "anime" },
    { label: "Animation", query: "animation" },
    { label: "Action", query: "action" },
    { label: "Romance", query: "romance" },
    { label: "Thriller", query: "thriller" },
    { label: "Sci-Fi", query: "sci fi" },
  ];

  return (
    <div className="categories">
      {categories.map((c) => (
        <button key={c.label} onClick={() => onSelect(c.query)}>
          {c.label}
        </button>
      ))}
    </div>
  );
}
