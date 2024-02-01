import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setDefinition(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "793aeaaa61tcbf2c55f5o4cf70867471";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <label>What word do you want to look up?</label>
          <input
            type="search"
            placeholder="Search here...."
            className="form-control"
            autoComplete="off"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
        </form>
        <small className="hint">i.e. paris, wine, yoga, coding</small>
      </section>
      <Result definition={definition} />
    </div>
  );
}
