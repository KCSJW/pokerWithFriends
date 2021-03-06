import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./utils/session";
import { logout } from "./actions/sessionActions";
import io from 'socket.io-client';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (localStorage.jwtToken) {
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const currentTime = Date.now() / 1000;
    if (decodedUser.exp < currentTime) {
      logout();
      store = configureStore({});
      window.location.hash = "/";
    } else {
      setAuthToken(localStorage.jwtToken);
      const preloadedState = {
        session: { isAuthenticated: true, user: decodedUser }
      };
      store = configureStore(preloadedState);
    }
  } else {
    store = configureStore({});
  }
  const root = document.getElementById("root");
  const socket = io();
  socket.connect();
  ReactDOM.render(<Root store={store} />, root);
});
