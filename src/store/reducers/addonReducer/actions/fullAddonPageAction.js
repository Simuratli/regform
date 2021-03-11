import {httpClient} from "../../../../services/services";
import {setError, setIsLoading} from "../../appReducer/actions/appAction";
import {FULL_ADDON_PAGE_DATA_LOADED} from "../types";
import get from "lodash/get";

export const getFullAddonPage = (slug) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));

        // const sessionStorage = JSON.parse(localStorage.getItem(slug));
        // if (sessionStorage) {
        //   return dispatch({ type: DATA_LOADED, payload: sessionStorage });
        // }

    httpClient
        .get(`add-ons/${slug}`)
        .then((res) => {
            // sessionStorage.setItem(slug, JSON.stringify(res.data));

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
