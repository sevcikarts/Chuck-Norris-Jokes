import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { fetchData } from "../redux/actions/dataActions";
import { fetchQuery } from "../redux/actions/queryActions";
import ButtonGroup from '@material-ui/core/ButtonGroup';

const SearchButton = ({ setQuery, setError, query, setValue, setJoke, value }) => {
  const dispatch = useDispatch();



  const userData = useSelector((state) => {
    return { data: state.queryReducer };
  });
  useEffect(() => {
    setJoke(userData.data.data.value);
  }, [userData.data.data.value, setJoke]);

  const randomJoke = () => {
    

    dispatch(fetchData(), setQuery(""), setError(""), setValue())}
    
  

  const randomJokeByQuery = () => {
    if(query.length>2){
    dispatch(fetchQuery(query), setValue(), setError(""))}
    else{
      setError("enter at least 3 characters")
    }
  }

  return (
    <div className="inControll">
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
      <Button

      className="button"
        size="large"
        variant="contained"
        color="primary"
        style={{ width: "300px", fontSize: "20px" }}
        onClick={query ? () => randomJokeByQuery() : () => randomJoke()}
      >
        {query ? "Random Joke by query" : (value ? "Random Joke by category" : "Random Joke")}
      </Button>
      {query ? <Button

      className="button"
        size="large"
        variant="contained"
        color="secondary"
        style={{ width: "80px", fontSize: "15px" }}
        onClick={ () => setQuery("") }
      >
        clear
      </Button>
      
      
      : ""}
     
      </ButtonGroup>
    </div>
  );
};

export default SearchButton;
