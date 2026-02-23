import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (text.trim()) onSearch(text);
  };

  return (
    <form className="search" onSubmit={submit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search movie..."
      />
      <button>Search</button>
    </form>
  );
}
