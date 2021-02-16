import { httpClient } from "../../services/services";
import { SET_IS_LOADING } from "../types";

export const DATA_LOADED = "DOWNLOAD FILE DATA LOADED";
export const START_LOADING_DATA =
  "DOWNLOAD FILE  FULL PAGE OF ADDON START LOADING DATA";
export const ERROR_LOADING_DATA = "ERROR LOADING DATA";

export const getDownloadFile = () => {
  return (dispatch, getState) => {
    const { resourcePath } = getState().fullAddonPage.fullAddonPage;
    // dispatch({ type: SET_IS_LOADING, payload: true });

    httpClient
      .get(resourcePath)
      .then((res) => {
        dispatch({ type: DATA_LOADED, payload: res.data });
        // dispatch({ type: SET_IS_LOADING, payload: false });
      })
      .catch((err) => {
        // dispatch({ type: SET_IS_LOADING, payload: false });
        dispatch({
          type: ERROR_LOADING_DATA,
          payload: { isError: true, message: err.message, err: err.response },
        });
      });
  };
};
