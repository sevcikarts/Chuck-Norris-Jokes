import "./App.css";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "./redux/actions/categoryActions";
import { fetchData } from "./redux/actions/dataActions";
import SearchBar from "./components/SearchBar.jsx";
import SearchSelect from "./components/SearchSelect.jsx";
import SearchButton from "./components/SearchButton.jsx";
import Joke from "./view/Joke";
import Error from "./view/Error";

function App() {
  const userData = useSelector((state) => {
    return { data: state.dataReducer, category: state.categoryReducer };
  });
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [randomJoke, setRandomJoke] = useState([""]);
  const [joke, setJoke] = useState("");
  const [error, setError] = useState("");



  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  // search random joke
  useEffect(() => {
    let clearArray = randomJoke.filter(function (e) {
      return e.replace(" ");
    });
    let jokeIn = _.sample(clearArray);
    setJoke(jokeIn);
  }, [randomJoke]);

  // random load joke
  useEffect(() => {
    setJoke(userData.data.data.value);
  }, [userData.data.data.value]);

  

  return (
   
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Joke joke={joke} />
        <div className="chuck">
          <Error error={error} />
        </div>
        </div>
        <SearchBar
          query={query}
          setQuery={setQuery}
          setRandomJoke={setRandomJoke}
          setError={setError}
        />
        
        <SearchSelect
          setQuery={setQuery}
          setRandomJoke={setRandomJoke}
          setError={setError}
          />
        
        <SearchButton
         setQuery={setQuery}/>
      </header>
    </div>
    
  );
}

export default App;
