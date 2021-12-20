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
import { IBrand } from "../../../types/storeTypes/brandTypes";
import BrandEditForm from "./BrandEditForm";
import { IForm } from "../../../types/componentsTypes/componentsTypes";
import { modalStyleAbsolute } from "../../../utils/styles";

const BrandEditParentForm: React.FC<IForm> = ({
  openModal,
  handleCloseModal,
}) => {
  const { brands } = useTypedSelector((state) => state.brands);

  const [value, setValue] = useState<IBrand>({} as IBrand);
  const [openChildModal, setOpenChildModal] = useState<boolean>(false);

  const handlerCloseChildModal = () => {
    setOpenChildModal(false);
  };

  const clickHandler = (item: IBrand) => {
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
              Выберите бренд
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2} alignItems="center" textAlign="center">
              {brands.map((brand) => (
                <Paper
                  elevation={12}
                  key={brand.id}
                  sx={{
                    bgcolor: "#1976d2",
                    color: "white",
                    padding: "5px",
                    width: "100%",
                    cursor: "pointer",
                  }}
                  onClick={() => clickHandler(brand)}
                >
                  {brand.name}
                </Paper>
              ))}
              <BrandEditForm
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

export default BrandEditParentForm;
