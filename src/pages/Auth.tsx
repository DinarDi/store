import {
  Alert,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { useAction } from "../hooks/useAction";
import { useEffectSckipFirst } from "../hooks/useEffectSkipFirst";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from "../utils/const";

const Auth: React.FC = () => {
  const { login, registration } = useAction();
  const { error, isAuth } = useTypedSelector((state) => state.user);

  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const history = useHistory();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const clickIn = () => {
    if (isLogin) {
      login(email, password);
    } else {
      registration(email, password);
    }
  };

  const emailChangeHandler = (item: string) => {
    setEmail(item);
    const tempEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    tempEmail.test(item) ? setEmailError(false) : setEmailError(true);
  };

  const passwordChangeHandler = (item: string) => {
    setPassword(item);
    item.length > 3 && item.length < 11
      ? setPasswordError(false)
      : setPasswordError(true);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clickIn();
  };

  useEffectSckipFirst(() => {
    isAuth ? history.push(MAIN_ROUTE) : setOpenAlert(true);
  }, [isAuth, error]);

  return (
    <Container
      maxWidth="xs"
      style={{ height: window.innerHeight - 64 }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h3" sx={{ mb: "15px", textAlign: "center" }}>
            {isLogin ? "Войти" : "Регистрация"}
          </Typography>
          <form noValidate autoComplete="off" onSubmit={submitHandler}>
            <TextField
              label="Введите email"
              fullWidth
              error={emailError}
              helperText={emailError ? "Введите корректный email" : null}
              sx={{ mb: "10px" }}
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                emailChangeHandler(e.target.value)
              }
            />
            <TextField
              label="Введите пароль"
              type="password"
              error={passwordError}
              helperText={
                passwordError
                  ? "Пароль должен быть больше 3 и меньше 10 символов"
                  : null
              }
              fullWidth
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                passwordChangeHandler(e.target.value)
              }
            />
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ mt: "15px" }}
            >
              <Grid item>
                {isLogin ? (
                  <Typography variant="subtitle1">
                    Нет аккаунта?{" "}
                    <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
                  </Typography>
                ) : (
                  <Typography variant="subtitle1">
                    Есть аккаунта? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
                  </Typography>
                )}
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  type="submit"
                  disabled={
                    email &&
                    password &&
                    emailError === false &&
                    passwordError === false
                      ? false
                      : true
                  }
                >
                  {isLogin ? "Войти" : "Регистрация"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={() => setOpenAlert(false)}
      >
        <Alert severity="warning">{error}</Alert>
      </Snackbar>
    </Container>
  );
};

export default Auth;
