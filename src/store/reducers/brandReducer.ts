import {
  BrandAction,
  BrandActionTypes,
  IBrand,
  IBrandState,
} from "../../types/storeTypes/brandTypes";

const initialState: IBrandState = {
  brands: [],
  selectedBrand: {} as IBrand,
};

export const BrandReducer = (
  state = initialState,
  action: BrandAction
): IBrandState => {
  switch (action.type) {
    case BrandActionTypes.SET_BRANDS:
      return { ...state, brands: action.payload };

    case BrandActionTypes.SET_SELECTED_BRAND:
      return { ...state, selectedBrand: action.payload };

    default:
      return state;
  }
};
