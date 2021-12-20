import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { MAIN_ROUTE } from "../../utils/const";
import { authRoutes, publicRoutes } from "./routes";

const AppRouter: React.FC = () => {
  const { isAuth } = useTypedSelector((state) => state.user);
  return (
    <Switch>
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={MAIN_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
