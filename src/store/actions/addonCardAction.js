import { httpClient } from "../../services/services";
import { SET_IS_LOADING } from "../types";

export const CARDS_DATA_LOADED = "CARDS_DATA_LOADED";
export const ERROR_LOADING_DATA = "ERROR LOADING DATA";

export const getAddonCard = () => {
  return (dispatch) => {
    // const dataFromLocalStorage = JSON.parse(localStorage.getItem("cardsArr"));
    //
    // if (dataFromLocalStorage) {
    //   return dispatch({
    //     type: CARDS_DATA_LOADED,
    //     payload: dataFromLocalStorage,
    //   });
    // }

    dispatch({ type: SET_IS_LOADING, payload: true });

    httpClient
      .get("add-ons/cards")
      .then((res) => {
        dispatch({ type: CARDS_DATA_LOADED, payload: res.data });
        dispatch({ type: SET_IS_LOADING, payload: false });

        localStorage.setItem("cardsArr", JSON.stringify(res.data));
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
