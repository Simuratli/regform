import { DATA_LOADED, IS_LOADING_DATA } from "../actions/fullAddonPageAction";
import { ERROR_LOADING_DATA } from "../actions/fullAddonPageAction";

const initStore = {
  fullAddonPage: {},
  errorLoadingData: { isError: false, message: "" },
  isLoading: true,
};

export const fullAddonPageReducer = (initialState = initStore, action) => {
  // console.log(action.type, 'actionS')
  switch (action.type) {
    case IS_LOADING_DATA:
      return { ...initialState, isLoading: action.payload };
    case DATA_LOADED:
      return { ...initialState, fullAddonPage: action.payload };
    case ERROR_LOADING_DATA:
      return {
        ...initialState,
        errorLoadingData: action.payload,
      };
    default:
      return initialState;
  }
};
