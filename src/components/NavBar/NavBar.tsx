import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { MAIN_ROUTE, LOGIN_ROUTE } from "../../utils/const";
import { useHistory } from "react-router-dom";
import ButtonsBar from "./ButtonsBar";

const NavBar: React.FC = () => {
  const { isAuth } = useTypedSelector((state) => state.user);
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <NavLink to={MAIN_ROUTE} style={{ textDecoration: "none" }}>
                <Typography variant="h6" component="div" color="white">
                  Shop
                </Typography>
              </NavLink>
            </Grid>
            <Grid item>
              {isAuth ? (
                <ButtonsBar />
              ) : (
                <Button
                  color="inherit"
                  onClick={() => history.push(LOGIN_ROUTE)}
                >
                  Авторизация
                </Button>
              )}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
