import { httpClient } from "../../../../services/services";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";
export const SET_EDUCATION_ACCESS_STATUS = "SET_EDUCATION_ACCESS_STATUS";

export const getEducationAccessStatus = (courseSlug) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        httpClient
            .get(`/education/courses/${courseSlug}/permission-state`)
            .then((res) => {
                dispatch({ type: SET_EDUCATION_ACCESS_STATUS, payload: res.data });
                dispatch(setIsLoading(false));
            })
            .catch((err) => {
                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
    };
};
