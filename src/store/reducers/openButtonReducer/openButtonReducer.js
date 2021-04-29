import { DATA_LOADED } from "./types";

const initStore = {
  addOnPortalLink: {},
};

export const openButtonReducer = (initialState = initStore, action) => {
  switch (action.type) {
    case DATA_LOADED:
      return { ...initialState, addOnPortalLink: action.payload };

    default:
      return initialState;
  }
};
