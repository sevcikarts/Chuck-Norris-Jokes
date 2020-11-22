import React from "react";
import reactStringReplace from "react-string-replace";

const Joke = ({ joke, setInProp, inProp }) => {
  const jokeLoad = () => {
    if (joke) {
      const styledJoke = reactStringReplace(
        joke,
        /(Chuck Norris)/g,
        (match, i) => (
          <strong key={i} className="chuck">
            {match}
          </strong>
        )
      );
      return styledJoke;
    }
  };

  return <div className="chuckFullJoke">{jokeLoad()}</div>;
};

export default Joke;
