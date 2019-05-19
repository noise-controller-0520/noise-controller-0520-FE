import React from "react";

import "./Login.css";

import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();

    this.props.login(this.state.credentials).then(() => {
      this.props.history.push("/protected");
    });
  };

  render() {
    return (
      <div className="background2">
        <div className="login-container">
            <h1> Login </h1>
          <form onSubmit={this.login}>
            <input
              placeholder="Username"
              name="username"
              onChange={this.handleChanges}
              value={this.state.credentials.username}
            />

            <input
              placeholder="Password"
              name="password"
              onChange={this.handleChanges}
              value={this.state.credentials.password}
            />
          </form>
          <button onClick={this.login}> Log in </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggingIn: state.isLoggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
