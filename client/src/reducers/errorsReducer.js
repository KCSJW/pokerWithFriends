import { combineReducers } from "redux";
import sessionErrorsReducer from "./sessionErrorsReducer";

export default combineReducers({
  session: sessionErrorsReducer
});
