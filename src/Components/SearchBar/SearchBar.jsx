import "./searchbar.css";
import { useState } from "react";
import React from 'react'
import { FaSistrix } from "react-icons/fa6";
const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`search-container ${isActive ? "active" : ""}`}>
      <button className="search-icon" onClick={handleToggle}>
        <FaSistrix className="search-icon" />
      </button>
      <input type="text" className="search-input" placeholder="Search..." />
    </div>
  );
};

export default SearchBar;
