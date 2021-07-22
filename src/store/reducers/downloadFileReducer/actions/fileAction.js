import { httpClient } from "../../../../services/services";
import {setError, setIsLoading} from "../../appReducer/actions/appAction";
import {DOWNLOADED_FILE, REMOVE_FILE, SET_ADDON_DOWNLOADING} from "../types";

export const getFile = (filePath, slug) => {
  return (dispatch) => {
    dispatch({ type: SET_ADDON_DOWNLOADING, payload: slug });
    httpClient
      .get(filePath)
      .then((res) => {
        dispatch({ type: DOWNLOADED_FILE, payload: res.data });
        dispatch(setIsLoading(false));
        dispatch({ type: SET_ADDON_DOWNLOADING, payload: null });
      })
      .catch((err) => {
        dispatch(setIsLoading(false));
        dispatch(setError(err.response));
        dispatch({ type: SET_ADDON_DOWNLOADING, payload: null });
      });
  };
};

export const removeFile = () => {
  return (dispatch) => {
    dispatch({ type: REMOVE_FILE });
  };
};
