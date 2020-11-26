import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { fetchData } from "../redux/actions/dataActions";
import { fetchQuery } from "../redux/actions/queryActions";

const SearchButton = ({ setQuery, setError, query, setValue, setJoke, value }) => {
  const dispatch = useDispatch();



  const userData = useSelector((state) => {
    return { data: state.queryReducer };
  });
  useEffect(() => {
    setJoke(userData.data.data.value);
  }, [userData.data.data.value, setJoke]);

  const randomJokeByQuery = () => {
    dispatch(fetchData(), setQuery(""), setError(""), setValue())
  }

  const randomJoke = () => {
    dispatch(fetchQuery(query), setValue(), setError(""))
  }

  return (
    <div className="inControll">
      <Button

        className="button"
        size="large"
        variant="contained"
        color="primary"
        style={{ width: "300px", fontSize: "20px" }}
        onClick={query ? () => randomJoke() : () => randomJokeByQuery()}
      >
        {query ? "Random Joke by query" : (value ? "Random Joke by category" : "Random Joke")}
      </Button>
    </div>
  );
};

export default SearchButton;
