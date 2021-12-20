import jwtDecode from "jwt-decode";
import { IUser } from "../types/storeTypes/userTypes";
import { $host, $authHost } from "./index";

interface IResponse {
  token: string;
}

export const registrationApi = async (
  email: string,
  password: string
): Promise<IUser> => {
  const { data } = await $host.post<IResponse>("api/user/registration", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const loginApi = async (
  email: string,
  password: string
): Promise<IUser> => {
  const { data } = await $host.post<IResponse>("api/user/login", {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const checkApi = async (): Promise<IUser> => {
  const { data } = await $authHost.get<IResponse>("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const fetchCartApi = async (userId: number) => {
  const { data } = await $authHost.get(`api/cart/${userId}`);
  return data;
};
