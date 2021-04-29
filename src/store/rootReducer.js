import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "redux";
import {userDataReducer} from "./reducers/userDataReducer/userDataReducer";
import {appReducer} from "./reducers/appReducer/appReducer";
import {addonReducer} from "./reducers/addonReducer/addonReducer";
import {downloadFileReducer} from "./reducers/downloadFileReducer/downloadFileReducer";
import {openButtonReducer} from "./reducers/openButtonReducer/openButtonReducer";
import {educationReducer} from "./reducers/educationReducer/educationReducer";
import {metadataReducer} from "./reducers/metadataReducer/metadataReducer";

const reducers = combineReducers({
  app: appReducer,
  addon: addonReducer,
  file: downloadFileReducer,
  addOnPortalLink: openButtonReducer,
  education: educationReducer,
  user: userDataReducer,
  metadata: metadataReducer,
});

const enhanceMiddleware = compose(applyMiddleware(thunk));
const store = createStore(reducers, enhanceMiddleware);
export default store;
