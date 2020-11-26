
import React,{ useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { fetchByCategory } from "../redux/actions/queryActions";

const SearchSelect = React.memo(({ setJoke, setError, setQuery, value,setValue}) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => {
    return { category: state.categoryReducer, data: state.queryReducer };
  });

  useEffect(() => {
    setJoke(userData.data.data);
  }, [userData.data.data,setJoke]);



  const handleSelect = (e) => {
    setValue(e.target.value);
    const query = e.target.value;
      setError("");
      dispatch(fetchByCategory(query))
      setQuery("");
      
    }
  ;

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
          value={value || ""}
          onChange={handleSelect}
        >
          {userData.category.category.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
});

export default SearchSelect;
