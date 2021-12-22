import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { IDevice } from "../../types/storeTypes/deviceTypes";
import { DEVICE_INFO_ROUTE } from "../../utils/const";

interface IDeviceItem {
  device: IDevice;
}

const DeviceItem: React.FC<IDeviceItem> = ({ device }) => {
  const { id, name, price, img } = device;
  const history = useHistory();
  return (
    <Grid item>
      <Card
        sx={{
          width: 175,
          cursor: "pointer",
          padding: "5px",
        }}
        variant="outlined"
        onClick={() => history.push(DEVICE_INFO_ROUTE + `/${id}`)}
      >
        <CardMedia
          component="img"
          height="150"
          image={process.env.REACT_APP_API_URL + img}
          alt="device"
          sx={{ mt: "15px", objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Цена:
          </Typography>
          <Typography variant="body1">{price} руб.</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default DeviceItem;
