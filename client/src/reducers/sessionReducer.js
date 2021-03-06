import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT
} from "../actions/sessionActions";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState.isAuthenticated = !!action.currentUser;
      nextState.user = action.currentUser;
      return nextState;
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    default:
      return state;
  }
}
