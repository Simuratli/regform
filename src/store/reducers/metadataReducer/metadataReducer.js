import {ADDONS_PAGE_METADATA, FULL_ADDON_PAGE_METADATA} from "./types";

const initStore = {
  addonsMetadata: [],
  fullAddonMetadata: [],
};

export const metadataReducer = (initialState = initStore, action) => {
  switch (action.type) {
    case ADDONS_PAGE_METADATA:
      return { ...initialState, addonsMetadata: action.payload };
    case FULL_ADDON_PAGE_METADATA:
      return { ...initialState, fullAddonMetadata: action.payload};

    default:
      return initialState;
  }
};

