import { Button, Container, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { createDeviceApi } from "../../../api/deviceAPI";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IForm, IInfo } from "../../../types/componentsTypes/componentsTypes";
import { modalStyleRelative } from "../../../utils/styles";
import AddInfo from "./AddInfo";
import SelectSomething from "./SelectSomething";

const DeviceForm: React.FC<IForm> = ({ openModal, handleCloseModal }) => {
  const { types } = useTypedSelector((state) => state.types);
  const { brands } = useTypedSelector((state) => state.brands);

  const [info, setInfo] = useState<IInfo[]>([]);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [file, setFile] = useState<File | string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files?.[0]);
  };

  const handleChangeType = (id: string) => {
    setSelectedType(id);
  };

  const handleChangeBrand = (id: string) => {
    setSelectedBrand(id);
  };

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", id: Date.now() }]);
  };

  const changeInfo = (key: string, value: string, id: number) => {
    setInfo(info.map((i) => (i.id === id ? { ...i, [key]: value } : i)));
  };

  const removeInfo = (id: number) => {
    setInfo(info.filter((i) => i.id !== id));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("img", file);
    formData.append("typeId", selectedType);
    formData.append("brandId", selectedBrand);
    formData.append("info", JSON.stringify(info));
    createDeviceApi(formData);

    setInfo([]);
    setName("");
    setPrice("");
    setFile("");
    setSelectedType("");
    setSelectedBrand("");

    handleCloseModal();
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
            selectValue={selectedType}
            changeSelectFunction={handleChangeType}
          />
          <SelectSomething
            items={brands}
            name="Бренд"
            selectValue={selectedBrand}
            changeSelectFunction={handleChangeBrand}
          />

          <TextField
            label="Введите название устройства"
            fullWidth
            sx={{ mb: "10px" }}
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <TextField
            label="Введите цену устройства"
            fullWidth
            sx={{ mb: "10px" }}
            type="number"
            value={price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPrice(e.target.value)
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
          {info.map((i) => (
            <AddInfo
              info={i}
              removeFunction={removeInfo}
              key={i.id}
              changeValueFunction={changeInfo}
            />
          ))}

          <Button type="submit" variant="contained" fullWidth>
            Добавить устройство
          </Button>
        </form>
      </Container>
    </Modal>
  );
};

export default DeviceForm;
