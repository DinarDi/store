import { Dispatch } from "react";
import {
  createTypeApi,
  deleteTypeApi,
  fetchTypesApi,
  updateTypeApi,
} from "../../api/typeAPI";
import {
  IType,
  TypeAction,
  TypeActionsTypes,
} from "../../types/storeTypes/typeTypes";

export const setTypes = (payload: IType[]): TypeAction => ({
  type: TypeActionsTypes.SET_TYPES,
  payload,
});

export const setSelectedType = (payload: IType): TypeAction => ({
  type: TypeActionsTypes.SET_SELECTED_TYPE,
  payload,
});

export const fetchTypes = () => {
  return async (dispatch: Dispatch<TypeAction>) => {
    const fetchResponse = await fetchTypesApi();
    dispatch(setTypes(fetchResponse));
  };
};

export const createType = (name: string) => {
  return async (dispatch: Dispatch<TypeAction>) => {
    try {
      await createTypeApi({ name });
      const fetchReasponse = await fetchTypesApi();
      dispatch(setTypes(fetchReasponse));
    } catch (e) {
      console.log(e);
    }
  };
};

export const updateType = (item: IType) => {
  return async (dispatch: Dispatch<TypeAction>) => {
    try {
      await updateTypeApi(item);
      const fetchReasponse = await fetchTypesApi();
      dispatch(setTypes(fetchReasponse));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteType = (id: number) => {
  return async (dispatch: Dispatch<TypeAction>) => {
    try {
      await deleteTypeApi(id);
      const fetchReasponse = await fetchTypesApi();
      dispatch(setTypes(fetchReasponse));
    } catch (e) {
      console.log(e);
    }
  };
};
