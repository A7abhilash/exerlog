import React from "react";
import { Redirect, Switch } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NewExercise from "../exercise/NewExercise";
import AuthRoute from "./AuthRoute";

function Routes() {
  return (
    <Switch>
      <AuthRoute exact path="/dashboard" component={Dashboard} />
      <AuthRoute exact path="/newExercise" component={NewExercise} />
      <Redirect from="*" to="/dashboard" />
    </Switch>
  );
}

export default Routes;
