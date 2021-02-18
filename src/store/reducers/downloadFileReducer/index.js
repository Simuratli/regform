import { DOWNLOADED_FILE, REMOVE_FILE, SET_ADDON_DOWNLOADING } from "./types";

const initStore = {
  file: {},
  addonTypeDownloading: null,
};

export const downloadFileReducer = (initialState = initStore, action) => {
  switch (action.type) {
    case DOWNLOADED_FILE:
      return { ...initialState, file: action.payload };

    case SET_ADDON_DOWNLOADING:
      return { ...initialState, addonTypeDownloading: action.payload };

    case REMOVE_FILE:
      return { ...initialState, file: {} };

    default:
      return initialState;
  }
};
