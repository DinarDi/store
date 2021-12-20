import { AxiosError } from "axios";
import { Dispatch } from "react";
import {
  addDeviceToCartApi,
  IAddCartDevice,
  removeDeviceFromCartApi,
} from "../../api/cartAPI";
import {
  checkApi,
  fetchCartApi,
  loginApi,
  registrationApi,
} from "../../api/userAPI";
import {
  IUser,
  IUserCart,
  UserAction,
  UserActionTypes,
} from "../../types/storeTypes/userTypes";

export const setAuth = (payload: boolean): UserAction => ({
  type: UserActionTypes.SET_AUTH,
  payload,
});

export const setUser = (payload: IUser): UserAction => ({
  type: UserActionTypes.SET_USER,
  payload,
});

export const setUserCart = (payload: IUserCart): UserAction => ({
  type: UserActionTypes.SET_USER_CART,
  payload,
});

export const setLoading = (payload: boolean): UserAction => ({
  type: UserActionTypes.SET_LOADING,
  payload,
});

export const setUserError = (payload: string): UserAction => ({
  type: UserActionTypes.SET_USER_ERROR,
  payload,
});

export const checkAndFetchCart = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch(setLoading(true));
      const response = await checkApi();
      dispatch(setUser(response));
      dispatch(setAuth(true));

      const cartResponse = await fetchCartApi(response.id);
      dispatch(setUserCart(cartResponse));
      dispatch(setLoading(false));
    } catch (e) {
      console.log(e);
      dispatch(setLoading(false));
    }
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch(setAuth(false));
      dispatch(setUserError(""));
      const loginResponse = await loginApi(email, password);
      const cartResponse = await fetchCartApi(loginResponse.id);

      dispatch(setUser(loginResponse));
      dispatch(setUserCart(cartResponse));
      dispatch(setAuth(true));
    } catch (e) {
      const error = e as AxiosError;
      dispatch(setUserError(error.response?.data.message));
    }
  };
};

export const registration = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch(setAuth(false));
      dispatch(setUserError(""));

      const registrationResponse = await registrationApi(email, password);
      const cartResponse = await fetchCartApi(registrationResponse.id);

      dispatch(setUser(registrationResponse));
      dispatch(setUserCart(cartResponse));
      dispatch(setAuth(true));
    } catch (e) {
      const error = e as AxiosError;
      dispatch(setUserError(error.response?.data.message));
    }
  };
};

export const exit = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch(setUser({} as IUser));
      dispatch(setAuth(false));
    } catch (e) {
      console.log(e);
    }
  };
};

export const addDevice = (device: IAddCartDevice, userId: number) => {
  return async (dispatch: Dispatch<UserAction>) => {
    await addDeviceToCartApi(device);

    const cartResponse = await fetchCartApi(userId);
    dispatch(setUserCart(cartResponse));
  };
};

export const removeDevice = (cartDeviceId: number, userId: number) => {
  return async (dispatch: Dispatch<UserAction>) => {
    await removeDeviceFromCartApi(cartDeviceId);

    const cartResponse = await fetchCartApi(userId);
    dispatch(setUserCart(cartResponse));
  };
};
