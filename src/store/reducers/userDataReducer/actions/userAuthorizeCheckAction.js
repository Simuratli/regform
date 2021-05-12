import { httpClient } from "../../../../services/services";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";
export const SET_USER_AUTHORIZE_DATA = "SET_USER_AUTHORIZE_DATA";

export const getAuthoriseCheck = () => {
    console.log("getAuthoriseCheck")
    return (dispatch) => {
        // dispatch(setIsLoading(true));
        httpClient
            .post(`/users/authorize`)
            .then((res) => {
                console.log("2")
                dispatch({ type: SET_USER_AUTHORIZE_DATA, payload: res.data});
                dispatch(setIsLoading(false));
            })
            .catch((err) => {
                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
    };
};
