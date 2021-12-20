import Admin from "../../pages/Admin";
import Auth from "../../pages/Auth";
import DeviceInfo from "../../pages/DeviceInfo";
import MainShop from "../../pages/MainShop";
import {
  ADMIN_ROUTE,
  DEVICE_INFO_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../../utils/const";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: MAIN_ROUTE,
    Component: MainShop,
  },
  {
    path: DEVICE_INFO_ROUTE + "/:id",
    Component: DeviceInfo,
  },
];
