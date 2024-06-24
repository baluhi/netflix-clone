import "./searchbar.css";
import { useState } from "react";
import React from 'react'
import { FaPerson, FaPersonCirclePlus, FaSistrix } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    <div className={`search-container ${isActive ? "active" : ""}`}>
      <button className="search-icon" onClick={handleToggle}>
        <FaSistrix className="search-icon" />
      </button>
      <input type="text" className="search-input" placeholder="Search..." />
    </div>
    <div>
      <IoPersonCircle className="fs-1"/>
    </div>
    </>
    
  );
};

export default SearchBar;
