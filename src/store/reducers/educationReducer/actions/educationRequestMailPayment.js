import { httpClient } from "../../../../services/services";
import {buttonLoader, openNotification, setError, setIsLoading} from "../../appReducer/actions/appAction";
import {getEducationAccessStatus} from "./educationGetAccessAction";

export const SET_EDUCATION_REQUEST_PAYMENT = "SET_EDUCATION_REQUEST_PAYMENT";


export const educationRequestMailPayment = (paymentData) => {
    return (dispatch) => {
        dispatch(buttonLoader(true));
        httpClient
            .post(`/payment/request-mail-payment`, paymentData)
            .then((res) => {
                dispatch({ type: SET_EDUCATION_REQUEST_PAYMENT, payload: res.data });
                dispatch(getEducationAccessStatus(paymentData.courseSlug))
                dispatch(buttonLoader(false));
                dispatch(openNotification(true));
            })
            .catch((err) => {
                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
    };
};
