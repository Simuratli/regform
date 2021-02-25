import { httpClient } from "../../../../services/services";

import { SET_CARDS_DATA } from "../types";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";

import get from "lodash/get";

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
        if (get(err, "response.data")) {
          localStorage.setItem(
            "error",
            JSON.stringify(get(err, "response.data"))
          );
          dispatch(setError(err.response.data));
        }

        dispatch(setIsLoading(false));
      });
  };
};
