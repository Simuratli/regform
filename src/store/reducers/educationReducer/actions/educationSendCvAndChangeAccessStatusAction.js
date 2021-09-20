import { httpClient } from "../../../../services/services";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";
import {getEducationAccessStatus} from "./educationGetAccessAction";

export const SEND_FILE_AND_CHANGE_ACCESS_STATUS = "SEND_FILE_AND_CHANGE_ACCESS_STATUS";

export const sendCvAndChangeAccessStatus = (courseSlug, file, taskUrl) => {

     let fd = new FormData()
    const currentPricePlanId = window.localStorage.getItem('currentPricePlanId')
    console.log(currentPricePlanId, 'currentPricePlanId')

    fd.append('resume', file)
    if (taskUrl) {
        fd.append('taskUrl', taskUrl)
    } else {
        fd.append('taskUrl', 0)
    }

    return (dispatch) => {
        dispatch(setIsLoading(true));
        httpClient
            .post(`/education/courses/${courseSlug}/permission-state/${currentPricePlanId}/call-for-access`, fd)
            .then((res) => {
                dispatch({ type: SEND_FILE_AND_CHANGE_ACCESS_STATUS, payload: res.data });
                dispatch(getEducationAccessStatus(courseSlug))
                dispatch(setIsLoading(false));
            })
            .catch((err) => {
                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
        window.localStorage.removeItem('currentPricePlanId')
    };
};
