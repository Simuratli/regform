import {DATA_LOADED} from "../actions/downloadFileAction";
import {ERROR_LOADING_DATA} from "../actions/downloadFileAction";
import {RESET_DATA} from "../actions/resetData";
import{DATA_LOADED_TEST} from "../actions/downloadFileCardAction"


const initStore = {
    file: {},
    error: null
};

export const getDownloadFileReducer = (initialState = initStore, action) => {
    switch (action.type) {
        case DATA_LOADED:
        case DATA_LOADED_TEST:
            return {...initialState, file: action.payload}
        case ERROR_LOADING_DATA :
            return {...initialState, error: action.payload}
        case RESET_DATA:
            return {...initialState, file: {}};
        default:
            return initialState
    }

}
