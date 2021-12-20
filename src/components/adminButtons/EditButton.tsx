import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ExpandMore } from "@mui/icons-material";
import React, { useState } from "react";
import TypeEditParentForm from "../modals/editModals/TypeEditParentForm";
import BrandEditParentForm from "../modals/editModals/BrandEditParentForm";

const EditButton: React.FC = () => {
  const [openTypeEditParentModal, setOpenTypeEditParentModal] =
    useState<boolean>(false);
  const [openBrandEditParentModal, setOpenBrandEditParentModal] =
    useState<boolean>(false);

  const handleCloseTypeEditParentModal = () => {
    setOpenTypeEditParentModal(false);
  };

  const handleCloseBrandEditParentModal = () => {
    setOpenBrandEditParentModal(false);
  };

  return (
    <Box sx={{ mt: "15px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ bgcolor: "#1976d2" }}
        >
          <Typography component="div" variant="h5" color="white">
            Редактировать
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              onClick={() => setOpenTypeEditParentModal(true)}
              fullWidth
            >
              Тип
            </Button>
            <TypeEditParentForm
              openModal={openTypeEditParentModal}
              handleCloseModal={handleCloseTypeEditParentModal}
            />

            <Button
              variant="contained"
              onClick={() => setOpenBrandEditParentModal(true)}
              fullWidth
            >
              Бренд
            </Button>
            <BrandEditParentForm
              openModal={openBrandEditParentModal}
              handleCloseModal={handleCloseBrandEditParentModal}
            />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default EditButton;
