import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch(keyword, location);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Job title (e.g. Frontend Developer)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <input
        type="text"
        placeholder="City (e.g. Hyderabad)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
