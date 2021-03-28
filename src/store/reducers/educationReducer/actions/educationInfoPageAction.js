import { httpClient } from "../../../../services/services";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";
export const SET_EDUCATION_INFO_PAGE = "SET_EDUCATION_INFO_PAGE";

export const getEducationInfoPage = (courseSlug) => {
    return (dispatch) => {
        dispatch(setIsLoading(true));
        httpClient
            .get(`/api/v{apiVersion}/educations/courses/${courseSlug}/preview`)
            .then((res) => {
                console.log(res.data, "resEducation")
                dispatch({ type: SET_EDUCATION_INFO_PAGE, payload: res.data });
                dispatch(setIsLoading(false));
            })
            .catch((err) => {

                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
    };
};