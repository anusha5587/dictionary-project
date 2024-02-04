import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState([]);

  function handleResponse(response) {
    console.log(response.data);
    setDefinition(response.data);
  }

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  function photosSearch() {
    let apiKey = "793aeaaa61tcbf2c55f5o4cf70867471";
    let apiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}&per_page=6`;
    axios.get(apiUrl).then(handleImages);
  }

  function search() {
    let apiKey = "793aeaaa61tcbf2c55f5o4cf70867471";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    console.log(apiUrl);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    photosSearch();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
    photosSearch();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
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
          <small className="hint">suggestions: paris, wine, yoga, coding</small>
        </section>
        <Result definition={definition} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
