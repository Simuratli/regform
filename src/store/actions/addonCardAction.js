import { httpClient } from "../../services/services";
import { SET_IS_LOADING } from "../types";

export const DATA_LOADED = "DATA LOADED";
export const ERROR_LOADING_DATA = "ERROR LOADING DATA";

export const getAddonCard = () => {
  return (dispatch) => {
    dispatch({ type: SET_IS_LOADING, payload: true });

    httpClient
      .get("add-ons/cards")
      .then((res) => {
        dispatch({ type: DATA_LOADED, payload: res.data });
        dispatch({ type: SET_IS_LOADING, payload: false });
      })
      .catch((err) => {
        dispatch({
          type: ERROR_LOADING_DATA,
          payload: { isError: true, message: err.message },
        });
        dispatch({ type: SET_IS_LOADING, payload: false });
      });
  };
};
