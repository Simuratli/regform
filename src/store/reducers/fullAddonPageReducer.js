import { DATA_LOADED } from "../actions/fullAddonPageAction";
import { ERROR_LOADING_DATA } from "../actions/fullAddonPageAction";

const initStore = {
  fullAddonPage: {},
  error: null,
};

export const fullAddonPageReducer = (initialState = initStore, action) => {
  // console.log(action.type, 'actionS')
  switch (action.type) {
    case DATA_LOADED:
      return { ...initialState, fullAddonPage: action.payload };
    case ERROR_LOADING_DATA:
      return { ...initialState, error: action.payload };
    default:
      return initialState;
  }
};
