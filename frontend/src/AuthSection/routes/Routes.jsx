import React from "react";
import { Redirect, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Exercise from "../exercise/Exercise";
import AuthRoute from "./AuthRoute";

function Routes() {
  return (
    <Switch>
      <AuthRoute exact path="/dashboard" component={Dashboard} />
      <AuthRoute exact path="/myExercises" component={Exercise} />
      <Redirect from="*" to="/dashboard" />
    </Switch>
  );
}

export default Routes;
