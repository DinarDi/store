import { Stack } from "@mui/material";
import React from "react";
import CartButton from "./CartButton";
import UserButton from "./UserButton";

const ButtonsBar: React.FC = () => {
  return (
    <Stack direction="row">
      <UserButton />
      <CartButton />
    </Stack>
  );
};

export default ButtonsBar;
