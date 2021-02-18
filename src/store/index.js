import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import { addonReducer } from "./reducers/addonReducer";
import { downloadFileReducer } from "./reducers/downloadFileReducer";
import { openButtonReducer } from "./reducers/openButtonReducer";
import { appReducer } from "./reducers/appReducer";

const reducers = combineReducers({
  app: appReducer,
  addon: addonReducer,
  file: downloadFileReducer,
  addOnPortalLink: openButtonReducer,
});

const enhanceMiddleware = compose(applyMiddleware(thunk));
const store = createStore(reducers, enhanceMiddleware);
export default store;
