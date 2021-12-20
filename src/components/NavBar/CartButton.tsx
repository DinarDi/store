import React, { useEffect, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CartItemCard from "./CartItemCard";
import { IDevice } from "../../types/storeTypes/deviceTypes";
import { fetchOneDeviceApi } from "../../api/deviceAPI";

const CartButton: React.FC = () => {
  const { userCart } = useTypedSelector((state) => state.user);

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [cartDevices, setCartDevices] = useState<IDevice[]>([]);

  const total = cartDevices.reduce((sum, item) => item.price + sum, 0);

  useEffect(() => {
    const fetch = async () => {
      const temp = [];
      for (let i = 0; i < userCart.cartItems.length; i++) {
        let element = userCart.cartItems[i];
        let response = await fetchOneDeviceApi(`${element.deviceId}`);
        temp.push(response);
      }
      setCartDevices(temp);
    };

    fetch();
  }, [userCart]);

  return (
    <div>
      <IconButton
        size="large"
        aria-label="drawer"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={() => setOpenDrawer(true)}
        color="inherit"
      >
        <ShoppingCartIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Container
          sx={{
            width: "385px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Typography variant="h3" component="h3">
            Корзина
          </Typography>
          {cartDevices.length !== 0 ? (
            <>
              <Box component="div" sx={{ flex: 1 }}>
                {cartDevices.map((cartDevice) => (
                  <CartItemCard key={cartDevice.id} item={cartDevice} />
                ))}
              </Box>

              <Box component="div" sx={{ mb: "15px" }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body1">Итого:</Typography>
                  <Typography variant="subtitle1">{total} руб.</Typography>
                </Stack>
                <Button variant="contained" fullWidth>
                  Оформить заказ
                </Button>
              </Box>
            </>
          ) : (
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              flex="1"
            >
              <Typography variant="h4" component="h4">
                Корзина пуста
              </Typography>
              <Typography variant="subtitle1" component="p">
                Добавьте товар для заказа
              </Typography>
            </Stack>
          )}
        </Container>
      </Drawer>
    </div>
  );
};

export default CartButton;
