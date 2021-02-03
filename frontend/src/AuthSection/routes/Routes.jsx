import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import AuthRoute from "./AuthRoute";

function Routes() {
  return (
    <Switch>
      <AuthRoute exact path="/dashboard" component={Dashboard} />
      <Redirect from="*" to="/dashboard" />
    </Switch>
  );
}

export default Routes;
