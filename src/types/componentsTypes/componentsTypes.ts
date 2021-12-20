import { IType } from "../storeTypes/typeTypes";

export interface IInfo {
  id: number;
  title: string;
  description: string;
  deviceId?: number;
}

export interface IForm {
  openModal: boolean;
  handleCloseModal: () => void;
}

export interface IEditForm {
  openModal: boolean;
  handleCloseModal: () => void;
  item: IType;
}

export interface ISelectSomething {
  items: IType[];
  name: string;
  selectValue: string;
  changeSelectFunction: (id: string) => void;
}
