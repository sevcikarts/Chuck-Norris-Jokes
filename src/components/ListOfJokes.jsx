import React, { useEffect } from "react";
import logo from "../img/arrow.png";

const ListOfJokes = ({ joke, setlistOfJokes, listOfJokes, checkedHistry }) => {
  useEffect(() => {
    if (joke)
      setlistOfJokes((state) => [
        ...state,
        {
          joke: joke,
          id: new Date().getTime(),
        },
      ]);
  }, [joke, setlistOfJokes]);

  console.log(listOfJokes)

  return (
    <div>
      <ul style={checkedHistry ? { display: "" } : { display: "none" }}>
        <img src={logo} alt="Logo" className="arrow" />
        {listOfJokes.map((item) => (
          <li key={item.id} className="jokeList">
            {item.joke}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfJokes;
