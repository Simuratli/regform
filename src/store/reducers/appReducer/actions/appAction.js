import {
  CHANGE_APP_LANGUAGE,
  RESET_DATA,
  SET_ADDONS_SORT_BY,
  SET_IS_LOADING,
  SET_ERROR,
  OPEN_NOTIFICATION, OPEN_BUTTON_LOADER,
} from "../types";

export const changeAppLanguage = (lang) => {
  return { type: CHANGE_APP_LANGUAGE, payload: lang };
};

export const setIsLoading = (payload) => {
  return { type: SET_IS_LOADING, payload };
};

export const setAddonsSortBy = (payload) => {
  return { type: SET_ADDONS_SORT_BY, payload };
};

export const setError = (payload) => {
  return { type: SET_ERROR, payload };
};

export const resetData = () => {
  return { type: RESET_DATA };
};
export const openNotification = (payload) => {
  return { type: OPEN_NOTIFICATION, payload };
};
export const buttonLoader = (payload) => {
  return { type: OPEN_BUTTON_LOADER, payload };
};

