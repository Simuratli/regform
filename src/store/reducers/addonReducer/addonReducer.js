import {SET_CARDS_DATA, FULL_ADDON_PAGE_DATA_LOADED, FULL_ADDON_TYPES} from "./types";

const initStore = {
  types: ['All', 'Portal'],
  cards: [],
  currentFullAddonPage: {},
};

export const addonReducer = (initialState = initStore, action) => {
  switch (action.type) {
    case SET_CARDS_DATA:
      return { ...initialState, cards: action.payload };

    case FULL_ADDON_PAGE_DATA_LOADED:
      return { ...initialState, currentFullAddonPage: action.payload };

    case FULL_ADDON_TYPES:
      return { ...initialState, types: action.payload };

    default:
      return initialState;
  }
};
