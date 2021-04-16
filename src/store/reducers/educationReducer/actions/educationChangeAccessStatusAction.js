import { httpClient } from "../../../../services/services";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";

export const CHANGE_EDUCATION_ACCESS_STATUS = "CHANGE_EDUCATION_ACCESS_STATUS";

export const changeEducationAccessStatus = (courseSlug) => {
    return (dispatch) => {
        httpClient
            .patch(`/education/courses/${courseSlug}/permission-state/call-for-access`, {
                "permission": "Pending"
            })
            .then((res) => {
                dispatch({ type: CHANGE_EDUCATION_ACCESS_STATUS, payload: res.data });
                dispatch(setIsLoading(false));
            })
            .catch((err) => {
                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
    };
};
