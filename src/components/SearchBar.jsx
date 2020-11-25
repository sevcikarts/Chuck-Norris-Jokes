import React,{useEffect} from "react";
import TextField from "@material-ui/core/TextField";
import { fetchQuery } from "../redux/actions/queryActions";
import { useSelector, useDispatch } from "react-redux";


const SearchBar = React.memo(({ query, setQuery, setValue, setJoke }) => {

  const userData = useSelector((state) => {
    return { data: state.queryReducer };
  });
        
  const dispatch = useDispatch();

  useEffect(() => {
    setJoke(userData.data.data.value);
  }, [userData.data.data.value,setJoke]);

  const handlechange = (e) => {
    e.preventDefault();
    setValue()
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
   dispatch(fetchQuery(query))
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
