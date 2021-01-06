import { DATA_LOADED } from "../actions/openButtonAction";
import { ERROR_LOADING_DATA } from "../actions/openButtonAction";

const initStore = {
  addOnPortalLink: {},
  error: null,
};

export const openButtonReducer = (initialState = initStore, action) => {
  switch (action.type) {
    case DATA_LOADED:
      return { ...initialState, addOnPortalLink: action.payload };
    case ERROR_LOADING_DATA:
      return { ...initialState, error: action.payload };
    default:
      return initialState;
  }
};
