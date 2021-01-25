import { ERROR_LOADING_DATA } from "../actions/fullAddonPageAction";
import { SET_IS_LOADING, CHANGE_APP_LANGUAGE } from "../types";

const initStore = {
  isLoading: false,
  error: { isError: false, message: "", err: null },
  lang: "en",
};

export const appReducer = (initialState = initStore, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...initialState, isLoading: action.payload };

    case ERROR_LOADING_DATA:
      return {
        ...initialState,
        error: action.payload,
      };

    case CHANGE_APP_LANGUAGE:
      return {
        ...initialState,
        lang: action.payload,
      };

    default:
      return initialState;
  }
};
