import { httpClient } from "../../services/services";

export const DATA_LOADED = "DATA LOADED";
export const SET_LOADING_DATA = "SET_LOADING_DATA";
export const ERROR_LOADING_DATA = "ERROR LOADING DATA";

export const getAddonCard = () => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING_DATA, payload: true });

    httpClient
      .get("add-ons/cards")
      .then((res) => {
        dispatch({ type: DATA_LOADED, payload: res.data });
        dispatch({ type: SET_LOADING_DATA, payload: false });
      })
      .catch((err) => {
        dispatch({ type: ERROR_LOADING_DATA, error: err });
        dispatch({ type: SET_LOADING_DATA, payload: false });
      });
  };
};
