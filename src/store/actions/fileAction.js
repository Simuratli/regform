import { httpClient } from "../../services/services";
import { ERROR_LOADING_DATA } from "./fullAddonPageAction";
import get from "lodash/get";
import { SET_IS_LOADING } from "../types";

export const DATA_LOADED = "FILE DATA LOADED";
export const START_LOADING_DATA = "FILE FULL PAGE OF ADDON START LOADING DATA";

export const getFile = () => {
  return (dispatch, getState) => {
    const { file } = getState().file;

    httpClient
      .get(file)
      .then((res) => {
        dispatch({ type: DATA_LOADED, payload: res.data });
      })
      .catch((error) => {
        get(error, "response.status") &&
          dispatch({
            type: ERROR_LOADING_DATA,
            payload: {
              isError: true,
              message: error.message,
              err: {
                status: get(error, "response.status"),
                statusText: get(error, "response.statusText"),
              },
            },
          });
      });
  };
};
