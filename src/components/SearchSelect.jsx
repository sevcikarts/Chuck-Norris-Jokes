import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const SearchSelect = React.memo(({ setJoke, setError, setQuery }) => {
  const userData = useSelector((state) => {
    return { category: state.categoryReducer };
  });

  const handleSelect = (e) => {
    const query = e.target.value;
    if (query.length > 2) {
      setError("");
      setQuery("");
      axios
        .get(`https://api.chucknorris.io/jokes/random?category=${query}`)
        .then((response) => {
          setJoke([response.data.value]);
        });
    }
  };

  return (
    <div className="inControll">
      <FormControl>
        <InputLabel color="primary" id="label">
          random by category
        </InputLabel>
        <Select
          displayEmpty
          labelId="label"
          style={{ width: "300px" }}
          defaultValue={userData.category.category.item || ""}
          onChange={handleSelect}
        >
          {userData.category.category.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
});

export default SearchSelect;
