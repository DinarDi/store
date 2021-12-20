import { combineReducers } from "redux";
import { BrandReducer } from "./brandReducer";
import { DeviceReducer } from "./deviceReducer";
import { TypeReducer } from "./typeReducer";
import { UserReducer } from "./userReducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  types: TypeReducer,
  brands: BrandReducer,
  devices: DeviceReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
