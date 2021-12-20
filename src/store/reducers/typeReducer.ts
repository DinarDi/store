import {
  IType,
  ITypeState,
  TypeAction,
  TypeActionsTypes,
} from "../../types/storeTypes/typeTypes";

const initialState: ITypeState = {
  types: [],
  selectedType: {} as IType,
};

export const TypeReducer = (
  state = initialState,
  action: TypeAction
): ITypeState => {
  switch (action.type) {
    case TypeActionsTypes.SET_TYPES:
      return { ...state, types: action.payload };

    case TypeActionsTypes.SET_SELECTED_TYPE:
      return { ...state, selectedType: action.payload };

    default:
      return state;
  }
};
