import { IInfo } from "../componentsTypes/componentsTypes";

export interface IDeviceState {
  count: number;
  rows: IDevice[];
  device: IDeviceInfo;
  currentPage: number;
  limit: number;
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  img: string;
  typeId: number;
  brandId: number;
}

export interface IDeviceInfo {
  id: number;
  name: string;
  price: number;
  img: string;
  typeId: number;
  brandId: number;
  info: IInfo[];
}

export enum DeviceActionTypes {
  SET_DEVICES = "SET_DEVICES",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  SET_DEVICE = "SET_DEVICE",
}

interface SetDevicesAction {
  type: DeviceActionTypes.SET_DEVICES;
  payload: IDeviceState;
}

interface SetCurrentPageAction {
  type: DeviceActionTypes.SET_CURRENT_PAGE;
  payload: number;
}

interface SetDeviceAction {
  type: DeviceActionTypes.SET_DEVICE;
  payload: IDeviceInfo;
}

export type DeviceAction =
  | SetDevicesAction
  | SetCurrentPageAction
  | SetDeviceAction;
