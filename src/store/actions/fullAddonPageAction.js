import { httpClient } from "../../services/services";
import { SET_IS_LOADING } from "../types";
export const DATA_LOADED = "FULL PAGE OF ADDON DATA LOADED";
export const ERROR_LOADING_DATA = "ERROR_LOADING_DATA";

export const getFullAddonPage = (slug) => {
  return (dispatch) => {
    // const sessionStorage = JSON.parse(localStorage.getItem(slug));
    //
    // if (sessionStorage) {
    //   return dispatch({ type: DATA_LOADED, payload: sessionStorage });
    // }

    dispatch({ type: SET_IS_LOADING, payload: true });

    httpClient
      .get(`add-ons/${slug}`)
      .then((res) => {
        // sessionStorage.setItem(slug, JSON.stringify(res.data));

        dispatch({ type: DATA_LOADED, payload: res.data });
        dispatch({ type: SET_IS_LOADING, payload: false });
      })
      .catch((err) => {
        console.log(err.response, "!!!!");

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
