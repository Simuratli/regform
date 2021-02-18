import {
  CHANGE_APP_LANGUAGE,
  RESET_DATA,
  SET_ADDONS_SORT_BY,
  SET_IS_LOADING,
  SET_ERROR,
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
