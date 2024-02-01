import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      Dictionary
      <div className="searchBar">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search here...."
            className="form-control"
            aria-label="Search"
            aria-describedby="addon-wrapping"
            autocomplete="off"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
      </div>
    </div>
  );
}
