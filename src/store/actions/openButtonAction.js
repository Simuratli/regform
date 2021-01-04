import { httpClient } from "../../services/services";

export const DATA_LOADED = 'DATA LOADED TO GET LINK';
export const START_LOADING_DATA = 'START LOADING DATA TO GET LINK';
export const ERROR_LOADING_DATA = 'ERROR LOADING DATA TO GET LINK';

export const getLink = (slug) => {

    return (dispatch) => {
        dispatch({ type: START_LOADING_DATA });

        httpClient.get(`add-ons/${slug}/web-resource`)
            .then(res => {
                dispatch({ type: DATA_LOADED, payload: res.data })
                window.location.href = res.data.addOnPortalLink;
            })
            .catch(err => dispatch({ type: ERROR_LOADING_DATA, error: err }))
    }
};