import { httpClient } from "../../../../services/services";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";
export const SET_EDUCATION_VIDEO_LESSONS = "SET_EDUCATION_VIDEO_LESSONS";

export const getEducationVideoLessons = (courseSlug) => {

    return (dispatch) => {
        dispatch(setIsLoading(true));
        httpClient
            .get(`/education/courses/${courseSlug}`)
            .then((res) => {
                dispatch({ type: SET_EDUCATION_VIDEO_LESSONS, payload: res.data });
                dispatch(setIsLoading(false));
            })
            .catch((err) => {

                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
    };
};
