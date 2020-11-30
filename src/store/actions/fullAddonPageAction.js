import { httpClient } from "../../services/services";

export const DATA_LOADED = 'FULL PAGE OF ADDON DATA LOADED';
export const START_LOADING_DATA = 'FULL PAGE OF ADDON START LOADING DATA';
export const ERROR_LOADING_DATA = 'FULL PAGE OF ADDON ERROR LOADING DATA';

export const getFullAddonPage = (slug) => {
    return (dispatch) => {
        dispatch({ type: START_LOADING_DATA });

        // console.log(slug);

        httpClient.get(`addons/${slug}`)
            .then(res => {
                dispatch({ type: DATA_LOADED, payload: res.data })
            })
            .catch(err => dispatch({ type: ERROR_LOADING_DATA, error: err }))
    }
};
