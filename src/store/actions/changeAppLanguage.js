import { CHANGE_APP_LANGUAGE } from "../types";

export const changeAppLanguage = (lang) => {
  return { type: CHANGE_APP_LANGUAGE, payload: lang };
};
