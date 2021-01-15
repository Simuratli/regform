import { httpClient } from "../../services/services";
import { SET_IS_LOADING } from "../types";
export const DATA_LOADED = "FULL PAGE OF ADDON DATA LOADED";
export const ERROR_LOADING_DATA = "ERROR_LOADING_DATA";

export const getFullAddonPage = (slug) => {
  return (dispatch) => {
    const isDataFromLocalStorage = JSON.parse(localStorage.getItem(slug));

    if (isDataFromLocalStorage) {
      return dispatch({ type: DATA_LOADED, payload: isDataFromLocalStorage });
    }

    dispatch({ type: SET_IS_LOADING, payload: true });

    httpClient
      .get(`add-ons/${slug}`)
      .then((res) => {
        localStorage.setItem(slug, JSON.stringify(res.data));

        dispatch({ type: DATA_LOADED, payload: res.data });
        dispatch({ type: SET_IS_LOADING, payload: false });
      })
      .catch((err) => {
        dispatch({ type: SET_IS_LOADING, payload: false });
        dispatch({
          type: ERROR_LOADING_DATA,
          payload: { isError: true, message: err.message, err: err.response },
        });
      });
  };
};

export const resetFullAddonPage = () => {
  return (dispatch) => {
    dispatch({ type: DATA_LOADED, payload: {} });
  };
};
