import { Dispatch } from "react";
import {
  createBrandApi,
  deleteBrandApi,
  fetchBrandsApi,
  updateBrandApi,
} from "../../api/brandAPI";
import {
  BrandAction,
  BrandActionTypes,
  IBrand,
} from "../../types/storeTypes/brandTypes";

export const setBrands = (payload: IBrand[]): BrandAction => ({
  type: BrandActionTypes.SET_BRANDS,
  payload,
});

export const setSelectedBrand = (payload: IBrand): BrandAction => ({
  type: BrandActionTypes.SET_SELECTED_BRAND,
  payload,
});

export const fetchBrands = () => {
  return async (dispatch: Dispatch<BrandAction>) => {
    const fetchResponse = await fetchBrandsApi();
    dispatch(setBrands(fetchResponse));
  };
};

export const createBrand = (name: string) => {
  return async (dispatch: Dispatch<BrandAction>) => {
    try {
      await createBrandApi({ name });
      const fetchResponse = await fetchBrandsApi();
      dispatch(setBrands(fetchResponse));
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateBrand = (item: IBrand) => {
  return async (dispatch: Dispatch<BrandAction>) => {
    try {
      await updateBrandApi(item);
      const fetchResponse = await fetchBrandsApi();
      dispatch(setBrands(fetchResponse));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteBrand = (id: number) => {
  return async (dispatch: Dispatch<BrandAction>) => {
    try {
      await deleteBrandApi(id);
      const fetchResponse = await fetchBrandsApi();
      dispatch(setBrands(fetchResponse));
    } catch (e) {
      console.log(e);
    }
  };
};
