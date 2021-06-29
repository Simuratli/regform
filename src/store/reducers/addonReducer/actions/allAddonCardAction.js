import { httpClient } from "../../../../services/services";
import { ALL_CARDS } from "../types";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";

export const getAllAddonCard = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));

        httpClient
            .get(`add-ons/cards`)
            .then((res) => {

                dispatch({type: ALL_CARDS, payload: res.data});

                dispatch(setIsLoading(false));
            })
            .catch((err) => {
                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
    };
};
