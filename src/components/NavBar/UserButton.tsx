import { AccountCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE } from "../../utils/const";

const UserButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user } = useTypedSelector((state) => state.user);
  const { exit } = useAction();
  const history = useHistory();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const adminButtonHandler = () => {
    history.push(ADMIN_ROUTE);
    setAnchorEl(null);
  };

  const exitButtonHandler = () => {
    localStorage.removeItem("token");
    exit();
    setAnchorEl(null);
    history.push(LOGIN_ROUTE);
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {user.role === "ADMIN" ? (
          <MenuItem onClick={adminButtonHandler}>Админ панель</MenuItem>
        ) : null}
        <MenuItem onClick={exitButtonHandler}>Выйти</MenuItem>
      </Menu>
    </div>
  );
};

export default UserButton;
