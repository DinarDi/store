import { $authHost } from ".";

export interface IAddCartDevice {
  cartId: number;
  deviceId: number;
}

export const addDeviceToCartApi = async (device: IAddCartDevice) => {
  const { data } = await $authHost.post("api/cartdevice", device);
  return data;
};

export const removeDeviceFromCartApi = async (id: number) => {
  const { data } = await $authHost.delete(`api/cartdevice/${id}`);
  return data;
};
