import React from "react";
import {useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import { fetchData } from ".././redux/actions/dataActions";

const SearchButton = ({setQuery}) => {
   const dispatch = useDispatch();
     
    return (
        <div>
            <Button 
            variant="contained"
            color="primary"
            style={{width:"250px"}}
            onClick={()=>dispatch(fetchData(),setQuery(""))}> Random Joke</Button>
        </div>
    )
}

export default SearchButton
