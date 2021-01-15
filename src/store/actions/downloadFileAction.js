import { httpClient } from "../../services/services";

export const DATA_LOADED = "DOWNLOAD FILE DATA LOADED";
export const START_LOADING_DATA =
  "DOWNLOAD FILE  FULL PAGE OF ADDON START LOADING DATA";
export const ERROR_LOADING_DATA = "ERROR LOADING DATA";

export const getDownloadFile = () => {
  return (dispatch, getState) => {
    const { resourcePath } = getState().fullAddonPage.fullAddonPage;

    dispatch({ type: START_LOADING_DATA });

    httpClient
      .get(resourcePath)
      .then((res) => {
        dispatch({ type: DATA_LOADED, payload: res.data });
      })
      .catch((err) =>
        dispatch({
          type: ERROR_LOADING_DATA,
          payload: { isError: true, message: err.message, err: err.response },
        })
      );
  };
};
