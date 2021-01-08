import { httpClient } from "../../services/services";

export const DATA_LOADED = "FILE DATA LOADED";
export const START_LOADING_DATA = "FILE FULL PAGE OF ADDON START LOADING DATA";
export const ERROR_LOADING_DATA = "FILE FULL PAGE OF ADDON ERROR LOADING DATA";

export const getFile = () => {
  return (dispatch, getState) => {
    const { file } = getState().file;

    dispatch({ type: START_LOADING_DATA });

    httpClient
      .get(file)
      .then((res) => {
        dispatch({ type: DATA_LOADED, payload: res.data });
      })
      .catch((err) => dispatch({ type: ERROR_LOADING_DATA, error: err }));
  };
};
