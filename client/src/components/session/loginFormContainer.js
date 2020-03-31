import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/sessionActions";
import SessionForm from "./sessionForm";

const mSTP = state => ({
  type: "Log In",
  errors: state.errors.session
});

const mDTP = dispatch => ({
  submit: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);
