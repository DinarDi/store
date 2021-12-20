import { $authHost, $host } from ".";
import { IBrand } from "../types/storeTypes/brandTypes";

interface ICreateBrand {
  name: string;
}

export const fetchBrandsApi = async () => {
  const { data } = await $host.get("api/brand");
  return data;
};

export const createBrandApi = async (item: ICreateBrand) => {
  const { data } = await $authHost.post("api/brand", item);
  return data;
};

export const updateBrandApi = async (item: IBrand) => {
  const { data } = await $authHost.put("api/brand", item);
  return data;
};

export const deleteBrandApi = async (id: number) => {
  const { data } = await $authHost.delete(`api/brand/${id}`);
  return data;
};
