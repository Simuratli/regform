// import { httpClient } from "../../../../services/services";
// import {SET_CARDS_DATA, TOTAL_PAGES} from "../types";
// import { setError, setIsLoading } from "../../appReducer/actions/appAction";
//
// export const getAddonCardForType = (type) => {
//     const pagesCount = [];
//     return (dispatch) => {
//         dispatch(setIsLoading(true));
//
//         httpClient
//             .get(`add-ons/cards?expression=addOnApplicationType.applicationType%20eq%20%22${type}%22&offset=1&limit=3`)
//             .then((res) => {
//                 for (let i = 1; i <= JSON.parse(res.headers['x-pagination']).totalPages; i++) {
//                     pagesCount.push(i);
//                 }
//                 dispatch({type: TOTAL_PAGES, payload: pagesCount});
//                 dispatch({ type: SET_CARDS_DATA, payload: res.data });
//                 dispatch(setIsLoading(false));
//                 localStorage.setItem("cardsArr", JSON.stringify(res.data));
//             })
//             .catch((err) => {
//                 dispatch(setError(err))
//                 dispatch(setIsLoading(false));
//             });
//
//
//    };
// };
