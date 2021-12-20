import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BrandForm from "../modals/addModals/BrandForm";
import DeviceForm from "../modals/deviceForm/DeviceForm";
import TypeForm from "../modals/addModals/TypeForm";

const AddButton: React.FC = () => {
  const [openTypeModal, setOpenTypeModal] = useState<boolean>(false);
  const [openBrandModal, setOpenBrandModal] = useState<boolean>(false);
  const [openDeviceModal, setOpenDeviceModal] = useState<boolean>(false);

  const handleOpenTypeModal = () => {
    setOpenTypeModal(true);
  };

  const handleCloseTypeModal = () => {
    setOpenTypeModal(false);
  };

  const handleOpenBrandModal = () => {
    setOpenBrandModal(true);
  };

  const handleCloseBrandModal = () => {
    setOpenBrandModal(false);
  };

  const handleOpenDeviceModal = () => {
    setOpenDeviceModal(true);
  };

  const handleCloseDeviceModal = () => {
    setOpenDeviceModal(false);
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ bgcolor: "#1976d2" }}
        >
          <Typography component="div" variant="h5" color="white">
            Добавить
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" justifyContent="space-between">
            <Button variant="contained" onClick={handleOpenTypeModal}>
              Тип
            </Button>
            <TypeForm
              openModal={openTypeModal}
              handleCloseModal={handleCloseTypeModal}
            />

            <Button variant="contained" onClick={handleOpenBrandModal}>
              Бренд
            </Button>
            <BrandForm
              openModal={openBrandModal}
              handleCloseModal={handleCloseBrandModal}
            />

            <Button variant="contained" onClick={handleOpenDeviceModal}>
              Устройство
            </Button>
            <DeviceForm
              openModal={openDeviceModal}
              handleCloseModal={handleCloseDeviceModal}
            />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AddButton;
