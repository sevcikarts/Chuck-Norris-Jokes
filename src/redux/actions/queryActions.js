import axios from "axios";
import {

    FETCH_QUERY_SUCCESS,

} from "../types/dataTypes";

export const fetchQuery = (query) => {

return (dispatch) => {
        axios
            .get(`https://api.chucknorris.io/jokes/search?query=${query}`)
            .then((response) => {
                let total = response.data.total;
                    
                if (total > 0) {
                    let random = Math.floor(Math.random() * response.data.total);
                    dispatch(fetchDataSuccess(response.data.result[random]));
                    console.log(response)
                    
                }
                if (total === 0) {
                     dispatch(fetchDataSuccess(response.data.result=[{value: "not found"}]));
                     console.log(response)
                }
            })
            .catch(() => {
                dispatch(fetchDataSuccess("enter at least 3 characters"))


            });
    }

};
export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_QUERY_SUCCESS,
        payload: data,
    };
};

