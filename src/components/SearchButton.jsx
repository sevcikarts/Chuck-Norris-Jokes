import React from "react";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { fetchData } from ".././redux/actions/dataActions";

const SearchButton = ({ setQuery, setError }) => {
  const dispatch = useDispatch();

  return (
    <div className="inControll">
      <Button
        className="button"
        size="large"
        variant="contained"
        color="primary"
        style={{ width: "300px", fontSize: "20px" }}
        onClick={() => dispatch(fetchData(), setQuery(""), setError(""))}
      >
        Random Joke
      </Button>
    </div>
  );
};

export default SearchButton;
