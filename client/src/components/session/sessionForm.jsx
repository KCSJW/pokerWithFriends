import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./sessionForm.css";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {}
    };
    this.submitForm = this.submitForm.bind(this);
    this.showErrors = this.showErrors.bind(this);
    this.renderUsernameInputField = this.renderUsernameInputField.bind(this);
    this.renderLoginSignupLink = this.renderLoginSignupLink.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {}

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  submitForm(e) {
    e.preventDefault();
    let { username, email, password } = this.state;
    this.props.submit({
      username,
      email,
      password
    });
  }

  showErrors() {
    if (this.props.errors) {
      return (
        <ul className="session error-list">
          <li>{Object.values(this.props.errors)}</li>
        </ul>
      );
    } else {
      return null;
    }
  }

  renderUsernameInputField() {
    if (this.props.type === "Sign Up") {
      return (
        <label>
          Username:
          <br />
          <input
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
            placeholder="Username"
          />
        </label>
      );
    }
    return null;
  }

  renderLoginSignupLink() {
    let target = "/signup";
    let btnText = "Sign Up Here!";

    if (this.props.type === "Sign Up") {
      target = "/";
      btnText = "Log In Here!";
    }

    return (
      <Link to={target}>
        <button>{btnText}</button>
      </Link>
    );
  }

  render() {
    return (
      <div className="signup-form">
        {this.renderUsernameInputField()}
        <label>
          Email:
          <br />
          <input
            type="email"
            value={this.state.email}
            onChange={this.update("email")}
            placeholder="Email"
          />
        </label>
        <br />
        <label>
          Password:
          <br />
          <input
            type="password"
            value={this.state.password}
            onChange={this.update("password")}
            placeholder="Password"
          />
        </label>
        {this.showErrors()}
        <div className="session-button">
          <button className="submit button" onClick={this.submitForm}>
            {this.props.type}
          </button>
        </div>
        {this.renderLoginSignupLink()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
