import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  function handleChangeSearchValue(e) {
    setSearchValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(searchValue);
    setSearchValue("");
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-form__input"
        type="text"
        value={searchValue}
        onChange={handleChangeSearchValue}
      />
      <button className="search-form__button" type="submit">
        <GrSearch />
      </button>
    </form>
  );
};
