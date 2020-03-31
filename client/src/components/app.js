import React from "react";
import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route";
import "./reset.css";

const App = () => (
  <div className="app-main">
    Hello there!
    {/* <Switch>
      <AuthRoute exact path="/" component={LoginForm} />
    </Switch> */}
  </div>
);


export default App;
