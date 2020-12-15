import { httpClient } from "../../services/services";

export const DATA_LOADED = 'DATA LOADED TO GET LINK';
export const START_LOADING_DATA = 'START LOADING DATA TO GET LINK';
export const ERROR_LOADING_DATA = 'ERROR LOADING DATA TO GET LINK';

export const getLink = (slug) => {
    console.log(slug, 'Rudy')

    return (dispatch) => {
        dispatch({ type: START_LOADING_DATA });
        httpClient.get(`add-ons/${slug}`)
            .then(res => {
                dispatch({ type: DATA_LOADED, payload: res.data })
                console.log(res, "getLink response")
            })
            .catch(err => dispatch({ type: ERROR_LOADING_DATA, error: err }))
    }
};