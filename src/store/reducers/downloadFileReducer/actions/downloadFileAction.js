import { httpClient } from "../../../../services/services";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";
import { DOWNLOADED_FILE, SET_ADDON_DOWNLOADING } from "../types";

export const getDownloadFile = (slug) => {
  return (dispatch, getState) => {
    const { addon } = getState();

    dispatch({ type: SET_ADDON_DOWNLOADING, payload: slug });

    httpClient
      .get(addon?.currentFullAddonPage?.resourcePath)
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
