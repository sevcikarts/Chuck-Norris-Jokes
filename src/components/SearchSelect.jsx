import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";


const SearchSelect = ({ setRandomJoke, setError, setQuery }) => {
  const userData = useSelector((state) => {
    return { category: state.categoryReducer };
  });


  const handleSelect = (e) => {
    e.preventDefault();
   
    const query = e.target.value;
    
    if (query.length > 2) {
      setRandomJoke([""]);
      setError("");
      setQuery("");
      axios
        .get(`https://api.chucknorris.io/jokes/random?category=${query}`)
        .then((response) => {
          setRandomJoke([response.data.value]); 
          
        });
        
    }
  };

  return (
    <div className="controll">
      <FormControl id="label">
        <InputLabel color="primary" id="label" >random by category
        </InputLabel>
        <Select
        className="valueX"
        labelId="label"
          style={{width:"250px"}}
          options={userData.category.category.item}
          defaultValue ={userData.category.category.item||""}
          onChange={handleSelect}
        >
          {userData.category.category.map((item) => (
            <MenuItem key={item}  value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SearchSelect;
