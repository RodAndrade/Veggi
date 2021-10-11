import React from "react";
import { BrowserRouter as AppRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// ** Root layout
import Root from "../layouts/Root";

// ** Routes
import Routes from "./routes";

const Router = () => {
  return (
    <AppRouter>
      <Root>
        <ToastContainer />
        <Switch>
          {Routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact === true}
              component={route.component}
            />
          ))}
        </Switch>
      </Root>
    </AppRouter>
  );
};

export default Router;
