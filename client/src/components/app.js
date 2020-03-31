import React from "react";
import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route";
import "./reset.css";
import SignupForm from "./session/signupFormContainer";
import LoginForm from "./session/loginFormContainer";
import Lobby from "./lobby/lobby";

const App = () => (
  <div className="app-main">
    <Switch>
      <AuthRoute exact path="/" component={LoginForm} />
      <AuthRoute exact path="/signup" component={SignupForm} />
      <ProtectedRoute exact path="/lobby" component={Lobby} />
    </Switch>
  </div>
);

export default App;
