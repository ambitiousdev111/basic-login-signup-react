import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/homepage/Home";
import Signup from "../pages/signup/Signup";

const PrimaryRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Signup} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

export default PrimaryRoutes;
