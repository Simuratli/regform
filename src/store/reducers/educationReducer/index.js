import {SET_EDUCATION_CARDS_DATA} from "./actions/educationCardAction";
import {SET_EDUCATION_INFO_PAGE} from "./actions/educationInfoPageAction";
import {SET_EDUCATION_VIDEO_LESSONS} from "./actions/educationVideoLessonsAction";
import {SET_EDUCATION_ACCESS_STATUS} from "./actions/educationGetAccessAction";
import {CHANGE_EDUCATION_ACCESS_STATUS} from "./actions/educationChangeAccessStatusAction";

const initStore = {
    educationCards: [],
    educationInfoPage: [],
    educationAccessStatus: {},
    changedAccessStatus: {}
};

export const educationReducer = (initialState = initStore, action) => {
    switch (action.type) {
        case SET_EDUCATION_CARDS_DATA:
            return { ...initialState, educationCards: action.payload };
        case SET_EDUCATION_INFO_PAGE:
            return { ...initialState, educationInfoPage: action.payload };
        case SET_EDUCATION_VIDEO_LESSONS:
            return { ...initialState, educationVideoLessons: action.payload };
        case SET_EDUCATION_ACCESS_STATUS:
            return { ...initialState, educationAccessStatus: action.payload };
            case CHANGE_EDUCATION_ACCESS_STATUS:
            return { ...initialState, changedAccessStatus: action.payload };
        default:
            return initialState;
    }
};
