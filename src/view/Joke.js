import React from "react";
import reactStringReplace from "react-string-replace";

const Joke = ({ joke,setNative }) => {
  const Joke = () => {
    if (joke) {
      const styledJoke = reactStringReplace(joke, /(Chuck Norris)/g, (match,i) => (
        <strong key={i} className="chuck">{match}</strong>
        
      ));
      return styledJoke;
    }

  };

  return <div>{Joke()}</div>;
};

export default Joke;
