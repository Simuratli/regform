import { httpClient } from "../../../../services/services";

import { SET_CARDS_DATA } from "../types";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";

export const getAddonCard = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));

    // const dataFromSessionStorage = JSON.parse(
    //   sessionStorage.getItem("cardsArr")
    // );
    //
    // if (dataFromSessionStorage) {
    //   return dispatch({
    //     type: CARDS_DATA_LOADED,
    //     payload: dataFromSessionStorage,
    //   });
    // }

    httpClient
      .get("add-ons/cards")
      .then((res) => {
        dispatch({ type: SET_CARDS_DATA, payload: res.data });
        dispatch(setIsLoading(false));

        localStorage.setItem("cardsArr", JSON.stringify(res.data));
      })
      .catch((err) => {
        dispatch(setError(err.response));
        dispatch(setIsLoading(false));
      });
  };
};
