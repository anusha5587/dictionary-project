import React from "react";
import Synonyms from "./Synonyms";
import "./css/Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
        {props.meaning.example && <em>"{props.meaning.example}"</em>}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
  } else {
    return null;
  }
}
