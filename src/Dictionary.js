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
          <div className="row">
            <div className="col-8">
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
            </div>
            <div className="col-4 d-flex justify-content-between">
              <input
                type="submit"
                value=" Search "
                placeholder="Search"
                className="btn btn-primary"
                style={{ border: "none" }}
                id="search-icon"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
