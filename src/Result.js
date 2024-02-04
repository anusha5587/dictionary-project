import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./css/Dictionary.css";

export default function Result(props) {
  if (props.definition) {
    return (
      <div className="Result">
        <section>
          <h1 className="text-capitalize">{props.definition.word}</h1>
          <Phonetic phonetic={props.definition.phonetic} />
        </section>
        {props.definition.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
