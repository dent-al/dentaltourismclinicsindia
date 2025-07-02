import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSearch(query);
      }}
      className="w-full max-w-xl mx-auto flex flex-col md:flex-row items-center gap-4 mb-8"
    >
      <input
        type="text"
        placeholder="Search by city or treatment..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border-2 border-[#0a7ffb] focus:outline-none focus:border-blue-400 text-lg shadow"
      />
      <button
        type="submit"
        className="px-6 py-3 rounded-lg bg-[#0a7ffb] text-white font-semibold text-lg shadow hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
