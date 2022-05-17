import React, { useEffect, useState } from "react";
import { personObject } from "../utils/exampleObject";
import PersonList from "./List";

export default function SearchComponent() {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    //     console.log(personData);
  }, []);

  const handleChangeInput = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
      <div>search Component</div>
      <div className="search">
        <input placeholder="Search" label="Search" onChange={handleChangeInput} />
        <PersonList input={inputText} />
      </div>
    </>
  );
}
