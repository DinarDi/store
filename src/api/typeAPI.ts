import { $authHost, $host } from ".";
import { IType } from "../types/storeTypes/typeTypes";

interface ICreateType {
  name: string;
}

export const createTypeApi = async (item: ICreateType) => {
  const { data } = await $authHost.post("api/type", item);
  return data;
};

export const fetchTypesApi = async () => {
  const { data } = await $host.get("api/type");
  return data;
};

export const updateTypeApi = async (item: IType) => {
  const { data } = await $authHost.put("api/type", item);
  return data;
};

export const deleteTypeApi = async (id: number) => {
  const { data } = await $authHost.delete(`api/type/${id}`);
  return data;
};
