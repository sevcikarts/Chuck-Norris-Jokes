import React, { useEffect } from "react";
import logo from "../img/arrow.png";

const ListOfJokes = ({ joke, setlistOfJokes, listOfJokes, checkedHistry }) => {

  useEffect(() => {
    if (joke && joke.toString() !== "expression not found")
      setlistOfJokes((state) => [
        ...state,
        {
          jokes: joke,
          id: new Date().getTime(),
        },
      ]);
  }, [joke, setlistOfJokes]);

  return (
    <div>
      <ul style={checkedHistry ? { display: "" } : { display: "none" }}>
        <img src={logo} alt="Logo" className="arrow" />
        {listOfJokes.map((item) => (
          <li key={item.id} className="jokeList">
            {item.jokes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfJokes;
