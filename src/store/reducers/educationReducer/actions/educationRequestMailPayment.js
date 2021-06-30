import { httpClient } from "../../../../services/services";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";
import {getEducationAccessStatus} from "./educationGetAccessAction";

export const SET_EDUCATION_REQUEST_PAYMENT = "SET_EDUCATION_REQUEST_PAYMENT";

export const educationRequestMailPayment = (paymentData) => {
    return (dispatch) => {
        httpClient
            .post(`/payment/request-mail-payment`, paymentData)
            .then((res) => {
                dispatch({ type: SET_EDUCATION_REQUEST_PAYMENT, payload: res.data });
                dispatch(getEducationAccessStatus(paymentData.courseSlug))
                dispatch(setIsLoading(false));
            })
            .catch((err) => {
                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
    };
};
