import { SET_CARDS_DATA, FULL_ADDON_PAGE_DATA_LOADED } from "./types";

const initStore = {
  cards: [],
  currentFullAddonPage: {},
};

export const addonReducer = (initialState = initStore, action) => {
  switch (action.type) {
    case SET_CARDS_DATA:
      return { ...initialState, cards: action.payload };

    case FULL_ADDON_PAGE_DATA_LOADED:
      return { ...initialState, currentFullAddonPage: action.payload };

    default:
      return initialState;
  }
};
