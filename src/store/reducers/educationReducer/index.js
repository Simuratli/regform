import {SET_EDUCATION_CARDS_DATA} from "./actions/educationCardAction";

const initStore = {
    educationCards: []
};

export const educationReducer = (initialState = initStore, action) => {
    switch (action.type) {
        case SET_EDUCATION_CARDS_DATA:
            return { ...initialState, educationCards: action.payload };
        default:
            return initialState;
    }
};
