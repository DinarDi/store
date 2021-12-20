export interface ITypeState {
  types: IType[];
  selectedType: IType;
}

export interface IType {
  id: number;
  name: string;
}

export enum TypeActionsTypes {
  SET_TYPES = "SET_TYPES",
  SET_SELECTED_TYPE = "SET_SELECTED_TYPE",
}

interface SetTypesAction {
  type: TypeActionsTypes.SET_TYPES;
  payload: IType[];
}

interface SetSelectedTypeAction {
  type: TypeActionsTypes.SET_SELECTED_TYPE;
  payload: IType;
}

export type TypeAction = SetTypesAction | SetSelectedTypeAction;
