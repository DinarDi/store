import { Button, Container, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { deleteDeviceInfoApi } from "../../../api/deviceAPI";
import { useAction } from "../../../hooks/useAction";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IInfo } from "../../../types/componentsTypes/componentsTypes";
import { IDeviceInfo } from "../../../types/storeTypes/deviceTypes";
import { MAIN_ROUTE } from "../../../utils/const";
import { modalStyleRelative } from "../../../utils/styles";
import AddInfo from "./AddInfo";
import SelectSomething from "./SelectSomething";

interface IDeviceForm {
  openModal: boolean;
  handleCloseModal: () => void;
  item: IDeviceInfo;
}

const DeviceEditForm: React.FC<IDeviceForm> = ({
  openModal,
  handleCloseModal,
  item,
}) => {
  const { types, selectedType } = useTypedSelector((state) => state.types);
  const { brands, selectedBrand } = useTypedSelector((state) => state.brands);
  const { currentPage, limit } = useTypedSelector((state) => state.devices);

  const { updateOneDevice, deleteDevice } = useAction();

  const [deviceInfo, setDeviceInfo] = useState<IInfo[]>([]);
  const [deviceName, setDeviceName] = useState<string>("");
  const [devicePrice, setDevicePrice] = useState<string>("");
  const [file, setFile] = useState<File | string>("");
  const [deviceSelectedType, setDeviceSelectedType] = useState<string>("");
  const [deviceSelectedBrand, setDeviceSelectedBrand] = useState<string>("");

  const history = useHistory();

  const { id, name, price, img, typeId, brandId, info } = item;

  useEffect(() => {
    setDeviceInfo(info);
    setDeviceName(name);
    setDevicePrice(`${price}`);
    setFile(img);
    setDeviceSelectedType(`${typeId}`);
    setDeviceSelectedBrand(`${brandId}`);
  }, [item]);

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files?.[0]);
  };

  const handleChangeType = (id: string) => {
    setDeviceSelectedType(id);
  };

  const handleChangeBrand = (id: string) => {
    setDeviceSelectedBrand(id);
  };

  const addInfo = () => {
    setDeviceInfo([
      ...deviceInfo,
      { title: "", description: "", id: Date.now() },
    ]);
  };

  const changeInfo = (key: string, value: string, id: number) => {
    setDeviceInfo(
      deviceInfo.map((i) => (i.id === id ? { ...i, [key]: value } : i))
    );
  };

  const removeInfo = (id: number) => {
    let finded = info.find((i) => i.id === id);
    if (finded) {
      deleteDeviceInfoApi(id);
      setDeviceInfo(deviceInfo.filter((i) => i.id !== id));
    } else {
      setDeviceInfo(deviceInfo.filter((i) => i.id !== id));
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", `${id}`);
    formData.append("name", deviceName);
    formData.append("price", devicePrice);
    formData.append("img", img);
    formData.append("newImg", file);
    formData.append("typeId", deviceSelectedType);
    formData.append("brandId", deviceSelectedBrand);
    formData.append("info", JSON.stringify(deviceInfo));
    updateOneDevice(formData, `${id}`);
    handleCloseModal();
  };

  const removeDevice = (id: number) => {
    deleteDevice(
      id,
      selectedType.id || null,
      selectedBrand.id || null,
      currentPage,
      limit
    );
    handleCloseModal();
    history.push(MAIN_ROUTE);
  };

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      style={{ overflow: "scroll" }}
      sx={{ position: "absolute" }}
    >
      <Container maxWidth="md" sx={{ ...modalStyleRelative, mt: "55px" }}>
        <form noValidate autoComplete="off" onSubmit={submitHandler}>
          <SelectSomething
            items={types}
            name="Тип"
            selectValue={deviceSelectedType}
            changeSelectFunction={handleChangeType}
          />
          <SelectSomething
            items={brands}
            name="Бренд"
            selectValue={deviceSelectedBrand}
            changeSelectFunction={handleChangeBrand}
          />

          <TextField
            label="Введите название устройства"
            fullWidth
            sx={{ mb: "10px" }}
            value={deviceName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDeviceName(e.target.value)
            }
          />
          <TextField
            label="Введите цену устройства"
            fullWidth
            sx={{ mb: "10px" }}
            type="number"
            value={devicePrice}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDevicePrice(e.target.value)
            }
          />
          <TextField
            fullWidth
            sx={{ mb: "10px" }}
            type="file"
            onChange={selectFile}
          />

          <Button variant="contained" onClick={addInfo} sx={{ mb: "10px" }}>
            Добавить характеристику
          </Button>
          {deviceInfo &&
            deviceInfo.map((i) => (
              <AddInfo
                info={i}
                removeFunction={removeInfo}
                key={i.id}
                changeValueFunction={changeInfo}
              />
            ))}

          <Button type="submit" variant="contained" fullWidth>
            Сохранить изменения
          </Button>

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: "15px" }}
            onClick={() => removeDevice(id)}
          >
            Удалить устройство
          </Button>
        </form>
      </Container>
    </Modal>
  );
};

export default DeviceEditForm;
