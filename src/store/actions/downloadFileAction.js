import { httpClient } from "../../services/services";

export const DATA_LOADED = 'DOWNLOAD FILE DATA LOADED';
export const START_LOADING_DATA = 'DOWNLOAD FILE  FULL PAGE OF ADDON START LOADING DATA';
export const ERROR_LOADING_DATA = 'DOWNLOAD FILE  FULL PAGE OF ADDON ERROR LOADING DATA';

export const getDownloadFile = () => {
    return (dispatch, getState) => {
        const { filePath } = getState().fullAddonPage.fullAddonPage;

        dispatch({ type: START_LOADING_DATA });

        httpClient.get(filePath)
            .then(res => {
                dispatch({ type: DATA_LOADED, payload: res.data })
            })
            .catch(err => dispatch({ type: ERROR_LOADING_DATA, error: err }))
    }
};