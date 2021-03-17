import { httpClient } from "../../../../services/services";
import {setError, setIsLoading} from "../../appReducer/actions/appAction";
import { DATA_LOADED } from "../types";
import { SET_ADDON_DOWNLOADING } from "../../downloadFileReducer/types";

export const getLink = (slug) => {
  return (dispatch) => {
    dispatch({ type: SET_ADDON_DOWNLOADING, payload: slug });

    httpClient
      .get(`add-ons/${slug}/web-resource`)
      .then((res) => {
        dispatch({ type: DATA_LOADED, payload: res.data });
        window.location.href = res.data.addOnPortalLink;
        dispatch({ type: SET_ADDON_DOWNLOADING, payload: null });
      })
      .catch((err) => {
          dispatch(setError(err))
          dispatch(setIsLoading(false));
          dispatch({ type: SET_ADDON_DOWNLOADING, payload: null });
      });
  };
};
