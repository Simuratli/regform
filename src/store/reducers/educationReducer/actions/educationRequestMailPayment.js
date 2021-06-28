import { httpClient } from "../../../../services/services";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";

export const SET_EDUCATION_REQUEST_PAYMENT = "SET_EDUCATION_REQUEST_PAYMENT";

export const educationRequestMailPayment = ({paymentData}) => {
    return (dispatch) => {
        httpClient
            .post(`/payment/request-mail-payment`, paymentData)
            .then((res) => {
                dispatch({ type: SET_EDUCATION_REQUEST_PAYMENT, payload: res.data });
                dispatch(setIsLoading(false));
                console.log(res, "payment res")
            })
            .catch((err) => {
                dispatch(setError(err))
                dispatch(setIsLoading(false));
                console.log(err, "payment err")
            });
    };
};
