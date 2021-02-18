import { httpClient } from "../../../../services/services";
import { setError } from "../../appReducer/actions/appAction";
import { DOWNLOADED_FILE, SET_ADDON_DOWNLOADING } from "../types";

export const getDownloadFileCard = ({ resourcePath, slug }) => {
  return (dispatch) => {
    dispatch({ type: SET_ADDON_DOWNLOADING, payload: slug });

    httpClient
      .get(resourcePath)
      .then((res) => {
        dispatch({ type: DOWNLOADED_FILE, payload: res.data });

        dispatch({ type: SET_ADDON_DOWNLOADING, payload: null });
      })
      .catch((err) => {
        dispatch(setError(err.response));
        dispatch({ type: SET_ADDON_DOWNLOADING, payload: null });
      });
  };
};
