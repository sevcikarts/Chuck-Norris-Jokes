import axios from "axios";
import React from "react";
import TextField from "@material-ui/core/TextField";

const SearchBar = React.memo(({ query, setQuery, setError, setJoke }) => {
  const handlechange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.length > 2) {
      setError("");
      try {
        axios
          .get(`https://api.chucknorris.io/jokes/search?query=${query}`)
          .then((response) => {
            let total = response.data.total;

            if (total > 0) {
              let random = Math.floor(Math.random() * response.data.total);
              setJoke(response.data.result[random].value);
            }

            if (total === 0) {
              setError("expression not found");
            }
          });
      } catch (error) {
        setJoke();
      }
    } else {
      setError("enter at least 3 characters");
    }
  };
  return (
    <div className="inControll">
      <form noValidate autoComplete="off" onSubmit={handleSearch}>
        <TextField
          onChange={handlechange}
          style={{ width: "300px" }}
          id="standard-basic"
          label="random by query"
          type="text"
          value={query}
        />
      </form>
    </div>
  );
});

export default SearchBar;
