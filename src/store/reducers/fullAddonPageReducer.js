import { DATA_LOADED } from "../actions/fullAddonPageAction";

const initStore = {
  fullAddonPage: {},
  errorLoadingData: { isError: false, message: "" },
};

export const fullAddonPageReducer = (initialState = initStore, action) => {
  switch (action.type) {
    case DATA_LOADED:
      return { ...initialState, fullAddonPage: action.payload };

    default:
      return initialState;
  }
};
