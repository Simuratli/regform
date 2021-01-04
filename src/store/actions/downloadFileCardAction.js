import { httpClient } from "../../services/services";

export const DATA_LOADED_TEST = 'DOWNLOAD FILE CARD DATA LOADED';
export const START_LOADING_DATA = 'DOWNLOAD FILE CARD  FULL PAGE OF ADDON START LOADING DATA';
export const ERROR_LOADING_DATA = 'DOWNLOAD FILE CARD  FULL PAGE OF ADDON ERROR LOADING DATA';

export const getDownloadFileCard = (resourcePath) => {
    return (dispatch) => {
        dispatch({ type: START_LOADING_DATA });

        httpClient.get(resourcePath)
            .then(res => {
                dispatch({ type: DATA_LOADED_TEST, payload: res.data })
            })
            .catch(err => dispatch({ type: ERROR_LOADING_DATA, error: err }))
    }
};
