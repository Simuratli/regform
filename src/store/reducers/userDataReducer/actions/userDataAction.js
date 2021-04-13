import { httpClient } from "../../../../services/services";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";
export const SET_USER_DATA = "SET_USER_DATA";

export const getUserData = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        httpClient
            .get(`/graph-users/whoami`)
            .then((res) => {
                dispatch({ type: SET_USER_DATA, payload: res.data});
                dispatch(setIsLoading(false));
            })
            .catch((err) => {
                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
    };
};
