import { httpClient } from "../../services/services";

export const DATA_LOADED = "FULL PAGE OF ADDON DATA LOADED";
export const IS_LOADING_DATA = "IS_LOADING_DATA";
export const ERROR_LOADING_DATA = "ERROR_LOADING_DATA";

export const getFullAddonPage = (slug) => {
  return (dispatch) => {
    dispatch({ type: IS_LOADING_DATA, payload: true });

    httpClient
      .get(`add-ons/${slug}`)
      .then((res) => {
        dispatch({ type: DATA_LOADED, payload: res.data });
        dispatch({ type: IS_LOADING_DATA, payload: false });
      })
      .catch((err) => {
        dispatch({ type: IS_LOADING_DATA, payload: false });
        dispatch({
          type: ERROR_LOADING_DATA,
          payload: { isError: true, message: err.message },
        });
      });
  };
};
