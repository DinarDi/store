import * as UserActionCreators from "./user";
import * as TypeActionCreators from "./types";
import * as BrandActionCreators from "./brands";
import * as DeviceActionCreators from "./devices";

export default {
  ...UserActionCreators,
  ...TypeActionCreators,
  ...BrandActionCreators,
  ...DeviceActionCreators,
};
