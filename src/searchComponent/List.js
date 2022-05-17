import React from "react";
import { personObject } from "../utils/exampleObject";

export default function PersonList(props) {
  const filterData = personObject.filter((el) => {
    if (props.input === "") {
      return el;
    } else {
      return el.name.toLowerCase().includes(props.input);
    }
  });

  return (
    <ul>
      {filterData.map((person, i) => (
        <li key={i}> {person.name}</li>
      ))}
    </ul>
  );
}
