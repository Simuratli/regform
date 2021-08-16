// import { httpClient } from "../../../../services/services";
// import { FULL_ADDON_TYPES } from "../types";
// import { setError, setIsLoading } from "../../appReducer/actions/appAction";
//
// export const getTypesCard = () => {
//     const types = ['All'];
//     return (dispatch) => {
//         dispatch(setIsLoading(true));
//
//         httpClient
//             .get("add-ons/cards")
//             .then((res) => {
//                 dispatch({ type: FULL_ADDON_TYPES, payload: types });
//                 dispatch(setIsLoading(false));
//
//                 res.data.forEach(card => {
//                     if (types.every((type) => type !== card.applicationType)) {
//                         types.push(card.applicationType)
//                     }
//                 })
//             })
//             .catch((err) => {
//                 dispatch(setError(err))
//                 dispatch(setIsLoading(false));
//             });
//     };
// };
