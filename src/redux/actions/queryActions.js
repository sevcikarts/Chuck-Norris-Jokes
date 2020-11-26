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
                    
                    
                }
                if (total === 0) {
                     dispatch(fetchDataSuccess(response.data.result={value:"expression not found"}));
                     
                }
            })
            .catch((error) => {
                dispatch(fetchDataSuccess(error))


            });
    }

};
export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_QUERY_SUCCESS,
        payload: data,
    };
};

