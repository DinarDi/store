import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import DeviceEditForm from "../components/modals/deviceForm/DeviceEditForm";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { ICartItem } from "../types/storeTypes/userTypes";
import { LOGIN_ROUTE } from "../utils/const";

interface IParams {
  id: string;
}

const DeviceInfo: React.FC = () => {
  const { user, userCart, isAuth } = useTypedSelector((state) => state.user);
  const { device } = useTypedSelector((state) => state.devices);
  const { addDevice, removeDevice, setOneDevice } = useAction();

  const [openModal, setOpenModal] = useState<boolean>(false);
  const { id } = useParams<IParams>();

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  let cartDevice: ICartItem | undefined = {} as ICartItem;

  if (isAuth) {
    cartDevice = userCart.cartItems.find((item) => item.deviceId === device.id);
  }

  const addToCart = () => {
    addDevice({ deviceId: device.id, cartId: userCart.id }, user.id);
  };

  const removeFromCart = () => {
    if (cartDevice) {
      removeDevice(cartDevice.id, user.id);
    }
  };

  useEffect(() => {
    setOneDevice(id);
  }, [openModal]);

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{ textAlign: "center", mb: "15px" }}
      >
        {device.name}
      </Typography>
      <Grid container gap={3} justifyContent="space-between">
        <Grid item>
          <img
            src={process.env.REACT_APP_API_URL + device.img}
            width="400px"
            height="400px"
            alt="Device"
            style={{ objectFit: "contain" }}
          />
        </Grid>
        <Grid item sx={{ maxWidth: "420px", textAlign: "center" }}>
          <Typography variant="h4" component="h4">
            Технические характеристики:
          </Typography>
          {device.info &&
            device.info.map((i) => (
              <Box key={i.id}>
                <Typography variant="body1" component="span">
                  {i.title}:
                </Typography>
                <Typography variant="subtitle1" component="span">
                  {i.description}
                </Typography>
              </Box>
            ))}
        </Grid>
        <Grid item>
          <Card
            variant="outlined"
            sx={{ border: "1px solid rgba(0, 0, 0, 0.5)" }}
          >
            <CardContent>
              <Box sx={{ mb: "15px" }}>
                <Typography variant="h5" component="span">
                  Цена:{" "}
                </Typography>
                <Typography variant="h5" component="span">
                  {device.price} руб.
                </Typography>
              </Box>

              {isAuth ? (
                cartDevice ? (
                  <Button variant="contained" onClick={removeFromCart}>
                    Удалить из корзины
                  </Button>
                ) : (
                  <Button variant="contained" onClick={addToCart}>
                    Добавить в корзину
                  </Button>
                )
              ) : (
                <Typography variant="h6">
                  Чтобы добавить товар в корзину{" "}
                  <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                </Typography>
              )}
            </CardContent>
          </Card>
          {user.role === "ADMIN" ? (
            <>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: "15px" }}
                onClick={() => setOpenModal(true)}
              >
                Редактировать
              </Button>
              <DeviceEditForm
                openModal={openModal}
                handleCloseModal={closeModalHandler}
                item={device}
              />
            </>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default DeviceInfo;
