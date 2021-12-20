import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";
import { IDevice } from "../../types/storeTypes/deviceTypes";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface ICartItemCard {
  item: IDevice;
}

const CartItemCard: React.FC<ICartItemCard> = ({ item }) => {
  const { id, name, price, img } = item;

  const { removeDevice } = useAction();
  const { user, userCart } = useTypedSelector((state) => state.user);

  const cartDeviceId = userCart.cartItems.filter(
    (item) => item.deviceId === id
  );

  const removeDeviceFromCart = () => {
    removeDevice(cartDeviceId[0].id, user.id);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        mt: "15px",
      }}
    >
      <CardMedia
        component="img"
        image={process.env.REACT_APP_API_URL + img}
        alt="Device"
        sx={{ width: "70px", height: "70px", ml: "10px" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      >
        <Box component="div">
          <Typography variant="body1" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" component="div">
            {price} руб.
          </Typography>
        </Box>
        <IconButton
          size="large"
          aria-label="delete cart item"
          aria-controls="cart"
          aria-haspopup="true"
          onClick={removeDeviceFromCart}
          color="inherit"
        >
          <DeleteOutlineIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CartItemCard;
