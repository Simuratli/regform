import {httpClient} from "../../../../services/services";
import {setError, setIsLoading} from "../../appReducer/actions/appAction";
import {FULL_ADDON_PAGE_DATA_LOADED} from "../types";

export const getFullAddonPage = (slug) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));

    httpClient
        .get(`add-ons/${slug}`)
        .then((res) => {
            dispatch({type: FULL_ADDON_PAGE_DATA_LOADED, payload: res.data});
            dispatch(setIsLoading(false));
        })
        .catch((err) => {
            dispatch(setError(err))
            dispatch(setIsLoading(false));
        });
    };
};

export const resetFullAddonPage = () => {
    return (dispatch) => {
        dispatch({type: FULL_ADDON_PAGE_DATA_LOADED, payload: {}});
    };
};
