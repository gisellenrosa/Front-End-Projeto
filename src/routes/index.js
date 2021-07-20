import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import PostPage from "../pages/PostPage";
import ErrorPage from "../pages/ErrorPage";

export default function routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/home" exact component={HomePage} />
        <Route path="/cadastro" exact component={SignUpPage} />
        <Route path="/post" exact component={PostPage} />
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
}
