import { Button, Container, Modal, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAction } from "../../../hooks/useAction";
import { IEditForm } from "../../../types/componentsTypes/componentsTypes";
import { modalStyleAbsolute } from "../../../utils/styles";

const BrandEditForm: React.FC<IEditForm> = ({
  openModal,
  handleCloseModal,
  item,
}) => {
  const { id, name } = item;

  const [text, setText] = useState<string>("");
  const { updateBrand, deleteBrand } = useAction();

  useEffect(() => {
    setText(name);
  }, [item]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateBrand({ id, name: text });
    handleCloseModal();
  };

  const deleteHandler = () => {
    deleteBrand(id);
    handleCloseModal();
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
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mb: "15px" }}
          >
            Обновить бренд
          </Button>
          <Button variant="contained" fullWidth onClick={deleteHandler}>
            Удалить бренд
          </Button>
        </form>
      </Container>
    </Modal>
  );
};

export default BrandEditForm;
