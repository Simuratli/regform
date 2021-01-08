import { ERROR_LOADING_DATA } from "../actions/fullAddonPageAction";
import { SET_IS_LOADING } from "../types";

const initStore = {
  isLoading: false,
  errorLoadingData: { isError: false, message: "" },
};

export const appReducer = (initialState = initStore, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...initialState, isLoading: action.payload };

    case ERROR_LOADING_DATA:
      return {
        ...initialState,
        errorLoadingData: action.payload,
      };

    default:
      return initialState;
  }
};
