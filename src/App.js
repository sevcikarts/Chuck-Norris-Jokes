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
import ListOfJokes from "./components/ListOfJokes.jsx";
import CheckedHistory from "./components/CheckedHistory.jsx";

function App() {
  const userData = useSelector((state) => {
    return { data: state.dataReducer, category: state.categoryReducer };
  });
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [randomJoke, setRandomJoke] = useState([""]);
  const [joke, setJoke] = useState("");
  const [error, setError] = useState("");
  const [listOfJokes, setlistOfJokes] = useState([{
    joke:"",
    id: ""
  }]);
  const [checkedHistry, setCheckedHistry] = useState(false);
  const [inProp, setInProp] = useState(false);

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
    return setJoke(_.sample(clearArray));
  }, [randomJoke]);

  // random load joke
  useEffect(() => {
    setJoke(userData.data.data.value);
  }, [userData.data.data.value]);

  return (
    <div className="App">
      <header className="App-header">  
     
        <div className="container">
       
         <Joke joke={joke} setlistOfJokes={setlistOfJokes} 
          setInProp={setInProp}
          inProp={inProp}
          />
          <div className="chuck">
            
            <Error error={error} />
          </div>
        </div>
        <div className="controll">
          <SearchBar
            query={query}
            setQuery={setQuery}
            setRandomJoke={setRandomJoke}
            setError={setError}
            setJoke={setJoke}
          />

          <SearchSelect
            setQuery={setQuery}
            setRandomJoke={setRandomJoke}
            setError={setError}
          />

          <SearchButton setQuery={setQuery} setError={setError}
          setInProp={setInProp} />
          <CheckedHistory
            checkedHistry={checkedHistry}
            setCheckedHistry={setCheckedHistry}
            listOfJokes={listOfJokes}
          />
        </div>
      </header>
      <div className="listOfJokes">
 <ListOfJokes
          checkedHistry={checkedHistry}
          joke={joke}
          setlistOfJokes={setlistOfJokes}
          listOfJokes={listOfJokes}
        />
       </div>
    </div>
  );
}

export default App;
