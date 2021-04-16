import { httpClient } from "../../../../services/services";
import { FULL_ADDON_PAGE_METADATA } from "../types";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";

export const getFullAddonMetadata = (slug) => {
  return (dispatch) => {
    dispatch(setIsLoading(true));

    httpClient
      .get(`meta-tags?routePath=add-ons%2F${slug}`)
      .then((res) => {
        dispatch({ type: FULL_ADDON_PAGE_METADATA, payload: res.data });
        dispatch(setIsLoading(false));
      })
      .catch((err) => {
        dispatch(setError(err))
        dispatch(setIsLoading(false));
      });
  };
};
