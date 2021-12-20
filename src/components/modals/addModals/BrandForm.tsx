import { Button, Container, Modal, TextField } from "@mui/material";
import React, { useState } from "react";
import { useAction } from "../../../hooks/useAction";
import { IForm } from "../../../types/componentsTypes/componentsTypes";
import { modalStyleAbsolute } from "../../../utils/styles";

const BrandForm: React.FC<IForm> = ({ openModal, handleCloseModal }) => {
  const [name, setName] = useState<string>("");
  const { createBrand } = useAction();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createBrand(name);
    setName("");
  };

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Container maxWidth="sm" sx={{ ...modalStyleAbsolute }}>
        <form noValidate autoComplete="off" onSubmit={submitHandler}>
          <TextField
            label="Введите бренд"
            fullWidth
            sx={{ mb: "10px" }}
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <Button type="submit" variant="contained" fullWidth>
            Добавить бренд
          </Button>
        </form>
      </Container>
    </Modal>
  );
};

export default BrandForm;
