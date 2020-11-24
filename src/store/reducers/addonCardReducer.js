import {DATA_LOADED} from "../actions/addonCardAction";
import {ERROR_LOADING_DATA} from "../actions/addonCardAction";

const initStore = {
    cards: [],
    error: null
};

export const addonCardReducer = (initialState = initStore, action) => {

    // console.log(action.type, "type")
    switch (action.type) {
        case DATA_LOADED:
            return {...initialState, cards: action.payload}
        case ERROR_LOADING_DATA :
            return {...initialState, error: action.payload}
        default:
            return initialState
    }
}
