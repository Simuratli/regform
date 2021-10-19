import {SET_CARDS_DATA, FULL_ADDON_PAGE_DATA_LOADED, FULL_ADDON_TYPES, TOTAL_PAGES, ALL_CARDS} from "./types";
import {SET_ADDON_DROPDOWN_LIST} from "./actions/addonDropdownListAction";

const initStore = {
  types: ["All", "Dynamics 365", "Portal"],
  cards: [],
  allCards: [],
  currentFullAddonPage: {},
  totalPages: [],
  dropdownList: []
};

export const addonReducer = (initialState = initStore, action) => {
  switch (action.type) {
    case SET_CARDS_DATA:
      return { ...initialState, cards: action.payload };

    case FULL_ADDON_PAGE_DATA_LOADED:
      return { ...initialState, currentFullAddonPage: action.payload };

    case FULL_ADDON_TYPES:
      return { ...initialState, types: action.payload };

    case TOTAL_PAGES:
      return { ...initialState, totalPages: action.payload }

    case ALL_CARDS:
      return { ...initialState, allCards: action.payload }

    case SET_ADDON_DROPDOWN_LIST:
      return { ...initialState,  dropdownList: action.payload }

    default:
      return initialState;
  }
};
