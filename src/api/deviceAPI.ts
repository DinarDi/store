import { $authHost, $host } from ".";

export const fetchDevicesApi = async (
  typeId: number | null,
  brandId: number | null,
  page: number = 1,
  limit: number = 3
) => {
  const { data } = await $host.get("api/device", {
    params: { typeId, brandId, page, limit },
  });
  return data;
};

export const fetchOneDeviceApi = async (id: string) => {
  const { data } = await $host.get(`api/device/${id}`);
  return data;
};

export const createDeviceApi = async (device: FormData) => {
  const { data } = await $authHost.post("api/device", device);
  return data;
};

export const updateDeviceApi = async (device: FormData) => {
  const { data } = await $authHost.put("api/device", device);
  return data;
};

export const deleteDeviceApi = async (id: number) => {
  const { data } = await $authHost.delete(`api/device/${id}`);
  return data;
};

export const deleteDeviceInfoApi = async (id: number) => {
  const { data } = await $authHost.delete(`api/device/info/${id}`);
  return data;
};
