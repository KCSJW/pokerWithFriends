import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/sessionActions";
import SessionForm from "./sessionForm";

const mSTP = state => ({
  type: "Sign Up",
  errors: state.errors.session
});

const mDTP = dispatch => ({
  submit: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);
