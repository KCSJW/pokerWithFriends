import * as APIUtil from "../utils/session";
import jwt_decode from "jwt-decode";

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  //TODO: need to dispatch logout user
};
