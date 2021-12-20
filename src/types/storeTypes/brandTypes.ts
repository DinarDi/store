export interface IBrandState {
  brands: IBrand[];
  selectedBrand: IBrand;
}

export interface IBrand {
  id: number;
  name: string;
}

export enum BrandActionTypes {
  SET_BRANDS = "SET_BRANDS",
  SET_SELECTED_BRAND = "SET_SELECTED_BRAND",
}

interface SetBrandsAction {
  type: BrandActionTypes.SET_BRANDS;
  payload: IBrand[];
}

interface SetSelectedBrandAction {
  type: BrandActionTypes.SET_SELECTED_BRAND;
  payload: IBrand;
}

export type BrandAction = SetBrandsAction | SetSelectedBrandAction;
