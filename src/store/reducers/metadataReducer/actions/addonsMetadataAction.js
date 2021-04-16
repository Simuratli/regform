import { httpClient } from "../../../../services/services";
import { ADDONS_PAGE_METADATA } from "../types";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";

export const getAddonMetadata = () => {
  return (dispatch) => {
    dispatch(setIsLoading(true));
    httpClient
      .get("meta-tags?routePath=add-ons")
      .then((res) => {
        dispatch({ type: ADDONS_PAGE_METADATA, payload: res.data });
        dispatch(setIsLoading(false));
      })
      .catch((err) => {
        dispatch(setError(err))
        dispatch(setIsLoading(false));
      });
  };
};
