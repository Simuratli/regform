import {SET_USER_DATA} from "./actions/userDataAction";

const initStore = {
    userData: {}
};

export const userDataReducer = (initialState = initStore, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...initialState, userData: action.payload };
        default:
            return initialState;
    }
};
