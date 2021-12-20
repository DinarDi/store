import { Grid, Typography } from "@mui/material";
import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import DeviceItem from "./DeviceItem";

const DeviceList: React.FC = () => {
  const { rows } = useTypedSelector((state) => state.devices);
  return (
    <Grid container gap={5} sx={{ mb: "15px" }}>
      {rows.length > 0 ? (
        rows.map((device) => <DeviceItem key={device.id} device={device} />)
      ) : (
        <Typography variant="h3" component="h3">
          Нет устройств
        </Typography>
      )}
    </Grid>
  );
};

export default DeviceList;
