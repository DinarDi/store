import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IType } from "../../../types/storeTypes/typeTypes";
import TypeEditForm from "./TypeEditForm";
import { IForm } from "../../../types/componentsTypes/componentsTypes";
import { modalStyleAbsolute } from "../../../utils/styles";

const TypeEditParentForm: React.FC<IForm> = ({
  openModal,
  handleCloseModal,
}) => {
  const { types } = useTypedSelector((state) => state.types);

  const [value, setValue] = useState<IType>({} as IType);
  const [openChildModal, setOpenChildModal] = useState<boolean>(false);

  const handlerCloseChildModal = () => {
    setOpenChildModal(false);
  };

  const clickHandler = (item: IType) => {
    setValue(item);
    setOpenChildModal(true);
  };

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Container maxWidth="sm" sx={{ ...modalStyleAbsolute }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ bgcolor: "#1976d2" }}
          >
            <Typography component="div" variant="h5" color="white">
              Выберите тип
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2} alignItems="center" textAlign="center">
              {types.map((type) => (
                <Paper
                  elevation={12}
                  key={type.id}
                  sx={{
                    bgcolor: "#1976d2",
                    color: "white",
                    padding: "5px",
                    width: "100%",
                    cursor: "pointer",
                  }}
                  onClick={() => clickHandler(type)}
                >
                  {type.name}
                </Paper>
              ))}
              <TypeEditForm
                openModal={openChildModal}
                handleCloseModal={handlerCloseChildModal}
                item={value}
              />
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Container>
    </Modal>
  );
};

export default TypeEditParentForm;
