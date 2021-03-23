import { httpClient } from "../../../../services/services";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";
export const SET_EDUCATION_CARDS_DATA = "SET_EDUCATION_CARDS_DATA";

export const getEducationCard = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));

        httpClient
            .get("educations/cards")
            .then((res) => {
                console.log(res.data, "resEducation")
                dispatch({ type: SET_EDUCATION_CARDS_DATA, payload: res.data });
                dispatch(setIsLoading(false));

                localStorage.setItem("cardsArr", JSON.stringify(res.data));
            })
            .catch((err) => {

                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
    };
};
