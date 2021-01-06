import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import { fullAddonPageReducer } from "./reducers/fullAddonPageReducer";
import { addonCardReducer } from "./reducers/addonCardReducer";
import { getDownloadFileReducer } from "./reducers/downloadFileReducer";
import { openButtonReducer } from "./reducers/openButtonReducer";

const reducers = combineReducers({
  addonCard: addonCardReducer,
  fullAddonPage: fullAddonPageReducer,
  file: getDownloadFileReducer,
  addOnPortalLink: openButtonReducer,
});

const enhanceMiddleware = compose(applyMiddleware(thunk));
const store = createStore(reducers, enhanceMiddleware);
export default store;
