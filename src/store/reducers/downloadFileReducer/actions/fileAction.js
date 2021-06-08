import { httpClient } from "../../../../services/services";
import { setError } from "../../appReducer/actions/appAction";
import { DOWNLOADED_FILE, REMOVE_FILE } from "../types";

export const getFile = (filePath) => {
  return (dispatch) => {
    httpClient
      .get(filePath)
      .then((res) => {
        dispatch({ type: DOWNLOADED_FILE, payload: res.data });
      })
      .catch((err) => {
        dispatch(setError(err.response));
      });
  };
};

export const removeFile = () => {
  return (dispatch) => {
    dispatch({ type: REMOVE_FILE });
  };
};
