import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
    //documentation:https://dictionaryapi.dev///
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
