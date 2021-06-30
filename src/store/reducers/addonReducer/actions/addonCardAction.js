import { httpClient } from "../../../../services/services";
import {SET_CARDS_DATA, TOTAL_PAGES} from "../types";
import { setError, setIsLoading } from "../../appReducer/actions/appAction";

// export const getAddonCard = (offset) => {
//     const pagesCount = [];
//   return (dispatch) => {
//     dispatch(setIsLoading(true));
//
//     httpClient
//       .get(`add-ons/cards?offset=${offset}&limit=9`)
//       .then((res) => {
//         for (let i = 1; i <= JSON.parse(res.headers['x-pagination']).totalPages; i++) {
//           pagesCount.push(i);
//         }
//
//         dispatch({type: TOTAL_PAGES, payload: pagesCount});
//
//         dispatch({ type: SET_CARDS_DATA, payload: res.data });
//         dispatch(setIsLoading(false));
//         localStorage.setItem("cardsArr", JSON.stringify(res.data));
//       })
//       .catch((err) => {
//           dispatch(setError(err))
//           dispatch(setIsLoading(false));
//       });
//   };
// };
export const getAddonCard = () => {
    return (dispatch) => {
        dispatch(setIsLoading(true));

        httpClient
            .get("add-ons/cards")
            .then((res) => {
                dispatch({ type: SET_CARDS_DATA, payload: res.data });
                dispatch(setIsLoading(false));
                localStorage.setItem("cardsArr", JSON.stringify(res.data));
            })
            .catch((err) => {
                dispatch(setError(err))
                dispatch(setIsLoading(false));
            });
    };
};
