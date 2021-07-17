import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

export default function routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/cadastro" exact component={SignUpPage} />
        <Route path="/home" exact component={HomePage} />

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
}
