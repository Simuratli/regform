import {
  SET_IS_LOADING,
  CHANGE_APP_LANGUAGE,
  SET_ADDONS_SORT_BY,
  ADDON_LOADING_STATE,
  SET_ERROR,
  RESET_DATA, OPEN_NOTIFICATION, OPEN_BUTTON_LOADER,
} from "./types";

const initStore = {
  isLoading: false,
  isOpenNotification: false,
  isOpenButtonLoader: false,
  error: {},
  lang: "en",
  addonsSortBy: "All",
  addonLoadingState: { type: null, loading: false, addonSlug: null },
};

export const appReducer = (initialState = initStore, action) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...initialState, isLoading: action.payload };
    case OPEN_NOTIFICATION:
      return { ...initialState, isOpenNotification: action.payload };
    case OPEN_BUTTON_LOADER:
      return { ...initialState, isOpenButtonLoader: action.payload };

    case SET_ADDONS_SORT_BY:
      return { ...initialState, addonsSortBy: action.payload };

    case SET_ERROR:
      return {
        ...initialState,
        error: action.payload,
      };

    case CHANGE_APP_LANGUAGE:
      return {
        ...initialState,
        lang: action.payload,
      };

    case ADDON_LOADING_STATE:
      return {
        ...initialState,
        addonLoadingState: action.payload,
      };

    case RESET_DATA:
      return initStore;

    default:
      return initialState;
  }
};
