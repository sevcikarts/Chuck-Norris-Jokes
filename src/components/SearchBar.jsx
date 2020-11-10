import axios from "axios";
import React  from "react";
import TextField from "@material-ui/core/TextField";

const SearchBar = ({ query, setQuery, setRandomJoke, setError }) => {

  const handlechange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.length > 2) {
      setRandomJoke([""]);
      setError("");
      axios
        .get(`https://api.chucknorris.io/jokes/search?query=${query}`)
        .then((response) => {
          response.data.result.map((item) =>
            setRandomJoke((state) => [...state, item.value])
          );
          let total = response.data.total;

          if (total === 0) {
            setError("expression not found");
          }
        });
    } else {
      setError("enter at least 3 characters");
    }
  };
  return (
    
    <div>
     <form noValidate autoComplete="off" onSubmit={handleSearch}>
     <TextField
      onChange={handlechange}
      style={{ width: "250px" }}
      id="standard-basic"
      label="random by query"
      type="text"
      value={query}
    />
      </form>
    </div>
  );
};

export default SearchBar;
