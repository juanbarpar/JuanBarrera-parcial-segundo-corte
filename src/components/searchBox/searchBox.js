import React, { useState } from "react";
import SearchIcon from "./searchIcon";
import "./index.css";

const SearchBox = ({ onSearchChange }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    onSearchChange(newValue); // Llama a la función proporcionada por el padre (App) con el nuevo valor de búsqueda
  };

  return (
    <div className="search-box">
      <SearchIcon />
      <input
        type="text"
        placeholder="Busca en este sitio web"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBox;
