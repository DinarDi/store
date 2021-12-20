import { Dispatch } from "react";
import {
  deleteDeviceApi,
  fetchDevicesApi,
  fetchOneDeviceApi,
  updateDeviceApi,
} from "../../api/deviceAPI";
import {
  DeviceAction,
  DeviceActionTypes,
  IDeviceInfo,
  IDeviceState,
} from "../../types/storeTypes/deviceTypes";

export const setDevices = (payload: IDeviceState): DeviceAction => ({
  type: DeviceActionTypes.SET_DEVICES,
  payload,
});

export const setCurrentPage = (payload: number): DeviceAction => ({
  type: DeviceActionTypes.SET_CURRENT_PAGE,
  payload,
});

export const setDevice = (payload: IDeviceInfo): DeviceAction => ({
  type: DeviceActionTypes.SET_DEVICE,
  payload,
});

export const setOneDevice = (id: string) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    const fetchResponse = await fetchOneDeviceApi(id);
    dispatch(setDevice(fetchResponse));
  };
};

export const updateOneDevice = (device: FormData, id: string) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    await updateDeviceApi(device);
    const fetchResponse = await fetchOneDeviceApi(id);
    dispatch(setDevice(fetchResponse));
  };
};

export const deleteDevice = (
  id: number,
  selectedTypeId: number | null,
  selectedBrandId: number | null,
  currentPage: number,
  limit: number
) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    await deleteDeviceApi(id);
    const fetchRespone = await fetchDevicesApi(
      selectedTypeId,
      selectedBrandId,
      currentPage,
      limit
    );
    dispatch(setDevices(fetchRespone));
  };
};

export const fetchDevices = (
  selectedTypeId: number | null,
  selectedBrandId: number | null,
  currentPage: number,
  limit: number
) => {
  return async (dispatch: Dispatch<DeviceAction>) => {
    const fetchResponse = await fetchDevicesApi(
      selectedTypeId,
      selectedBrandId,
      currentPage,
      limit
    );
    dispatch(setDevices(fetchResponse));
  };
};
