import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {compose} from "redux";
import {fullAddonPageReducer} from "./reducers/fullAddonPageReducer";
import {addonCardReducer} from "./reducers/addonCardReducer";
import {getDownloadFileReducer} from "./reducers/downloadFileReducer";


const reducers = combineReducers({addonCard: addonCardReducer, fullAddonPage: fullAddonPageReducer, file: getDownloadFileReducer});

const enhanceMiddleware = compose(applyMiddleware(thunk))
const store = createStore(reducers, enhanceMiddleware);
export default store;
