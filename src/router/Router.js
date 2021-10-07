import React from "react";
import {
  BrowserRouter as AppRouter,
  Switch,
  Route,
} from "react-router-dom";

// ** Root layout
import Root from '../layouts/Root';

// ** Routes
import Routes from "./routes";

const Router = () => {
  return (
    <AppRouter>
      <Root>
        <Switch>
          {Routes.map(route => (
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
  )
}

export default Router;