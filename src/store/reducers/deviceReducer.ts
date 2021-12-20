import {
  DeviceAction,
  DeviceActionTypes,
  IDeviceState,
  IDeviceInfo,
} from "../../types/storeTypes/deviceTypes";

const initialState: IDeviceState = {
  count: 1,
  rows: [],
  device: {} as IDeviceInfo,
  currentPage: 1,
  limit: 3,
};

export const DeviceReducer = (
  state = initialState,
  action: DeviceAction
): IDeviceState => {
  switch (action.type) {
    case DeviceActionTypes.SET_DEVICES:
      return {
        ...state,
        count: action.payload.count,
        rows: action.payload.rows,
      };

    case DeviceActionTypes.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };

    case DeviceActionTypes.SET_DEVICE:
      return { ...state, device: action.payload };

    default:
      return state;
  }
};
