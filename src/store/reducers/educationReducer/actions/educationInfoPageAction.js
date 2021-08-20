import { httpClient } from "../../../../services/services";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";
export const SET_EDUCATION_INFO_PAGE = "SET_EDUCATION_INFO_PAGE";

export const getEducationInfoPage = (courseSlug) => {

    return (dispatch) => {
        dispatch(setIsLoading(true));
        httpClient
            .get(`/education/courses/${courseSlug}/preview`)
            .then((res) => {
                dispatch({ type: SET_EDUCATION_INFO_PAGE, payload: res.data });
                dispatch(setIsLoading(false));
            })
            .catch((err) => {

                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
    };
};

export const resetEducationInfoPage = () => {

    return (dispatch) => {
        dispatch(setIsLoading(true));
        dispatch({type: SET_EDUCATION_INFO_PAGE, payload: {}});
        dispatch(setIsLoading(true));
    };
};
