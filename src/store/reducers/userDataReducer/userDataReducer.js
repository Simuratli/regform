import {SET_USER_DATA} from "./actions/userDataAction";
import {SET_USER_AUTHORIZE_DATA} from "./actions/userAuthorizeCheckAction";

const initStore = {
    userData: {},
    userAuth: false
};

export const userDataReducer = (initialState = initStore, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...initialState, userData: action.payload};
        case SET_USER_AUTHORIZE_DATA:
            return {...initialState, userAuth: action.payload};
        default:
            return initialState;
    }
};
