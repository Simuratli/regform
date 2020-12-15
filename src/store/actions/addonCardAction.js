import { httpClient } from "../../services/services";

export const DATA_LOADED = 'DATA LOADED';
export const START_LOADING_DATA = 'START LOADING DATA';
export const ERROR_LOADING_DATA = 'ERROR LOADING DATA';

export const getAddonCard = () => {
    return (dispatch) => {
        dispatch({ type: START_LOADING_DATA });

        httpClient.get('add-ons/page-content')
            .then(res => {
                dispatch({ type: DATA_LOADED, payload: res.data })
            })
            .catch(err => dispatch({ type: ERROR_LOADING_DATA, error: err }))
    }
};