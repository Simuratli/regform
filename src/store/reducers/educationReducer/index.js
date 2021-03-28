import {SET_EDUCATION_CARDS_DATA} from "./actions/educationCardAction";
import {SET_EDUCATION_INFO_PAGE} from "./actions/educationInfoPageAction";

const initStore = {
    educationCards: [],
    educationInfoPage: []
};

export const educationReducer = (initialState = initStore, action) => {
    switch (action.type) {
        case SET_EDUCATION_CARDS_DATA:
            return { ...initialState, educationCards: action.payload };
        case SET_EDUCATION_INFO_PAGE:
            return { ...initialState, educationInfoPage: action.payload };
        default:
            return initialState;
    }
};
