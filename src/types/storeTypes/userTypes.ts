export interface IUserState {
  isAuth: boolean;
  user: IUser;
  userCart: IUserCart;
  loading: boolean;
  error: string;
}

export interface IUser {
  id: number;
  email: string;
  role?: string;
}

export interface IUserCart {
  id: number;
  userId: number;
  cartItems: ICartItem[];
}

export interface ICartItem {
  id: number;
  cartId: number;
  deviceId: number;
}

export enum UserActionTypes {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
  SET_LOADING = "SET_LOADING",
  SET_USER_CART = "SET_USER_CART",
  SET_USER_ERROR = "SET_USER_ERROR",
}

interface SetAuthAction {
  type: UserActionTypes.SET_AUTH;
  payload: boolean;
}

interface SetUserAction {
  type: UserActionTypes.SET_USER;
  payload: IUser;
}

interface SetLoadingAction {
  type: UserActionTypes.SET_LOADING;
  payload: boolean;
}

interface SetUserCartAction {
  type: UserActionTypes.SET_USER_CART;
  payload: IUserCart;
}

interface SetUserErrorAction {
  type: UserActionTypes.SET_USER_ERROR;
  payload: string;
}

export type UserAction =
  | SetAuthAction
  | SetUserAction
  | SetLoadingAction
  | SetUserCartAction
  | SetUserErrorAction;
