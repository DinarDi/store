import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import BrandBar from "../components/BrandBar/BrandBar";
import DeviceList from "../components/Device/DeviceList";
import PaginationBar from "../components/Pagination/PaginationBar";
import TypeBar from "../components/TypeBar/TypeBar";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const MainShop: React.FC = () => {
  const { fetchDevices } = useAction();
  const { currentPage, limit } = useTypedSelector((state) => state.devices);
  const { selectedType } = useTypedSelector((state) => state.types);
  const { selectedBrand } = useTypedSelector((state) => state.brands);

  useEffect(() => {
    fetchDevices(selectedType.id, selectedBrand.id, currentPage, limit);
  }, [selectedType, selectedBrand, currentPage]);

  return (
    <Grid container gap={3}>
      <Grid item>
        <TypeBar />
      </Grid>
      <Grid item xs={10}>
        <BrandBar />
        <DeviceList />
        <PaginationBar />
      </Grid>
    </Grid>
  );
};

export default MainShop;
