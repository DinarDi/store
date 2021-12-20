import {
  IUser,
  IUserCart,
  IUserState,
  UserAction,
  UserActionTypes,
} from "../../types/storeTypes/userTypes";

const initialState: IUserState = {
  isAuth: false,
  user: {} as IUser,
  userCart: {} as IUserCart,
  loading: true,
  error: "",
};

export const UserReducer = (
  state = initialState,
  action: UserAction
): IUserState => {
  switch (action.type) {
    case UserActionTypes.SET_AUTH:
      return { ...state, isAuth: action.payload };

    case UserActionTypes.SET_USER:
      return { ...state, user: action.payload };

    case UserActionTypes.SET_USER_CART:
      return { ...state, userCart: action.payload };

    case UserActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };

    case UserActionTypes.SET_USER_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
