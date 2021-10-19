import {setError, setIsLoading} from "../../appReducer/actions/appAction";
import {httpClient} from "../../../../services/services";
export const SET_ADDON_DROPDOWN_LIST = "SET_ADDON_DROPDOWN_LIST";

export const getAddonDropdownList = () => {
    return (dispatch) => {

        dispatch(setIsLoading(true));

        httpClient
            .get(`add-ons/cards`)
            .then((res) => {
                dispatch({ type: SET_ADDON_DROPDOWN_LIST, payload: res.data });
                dispatch(setIsLoading(false));
            })
            .catch((err) => {
                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
    };
};
