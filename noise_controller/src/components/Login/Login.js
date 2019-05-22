import React from "react";
import "./Login.css";
import { connect } from "react-redux";
import { login } from "../../actions";

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
      if (localStorage.getItem('token')) {
        this.props.history.push("/classrooms");
      }
      else {
        // Flash a message saying Invalid Credentials or something like that
      }
    });
  };

  render() {
    return (
      <div className="background2">
        <div className="login-container">
          <h1> Login </h1>
          <form onSubmit={this.login}>
            <div className="align-form">
              <p> Username </p>
              <input
                placeholder="Enter username"
                name="username"
                onChange={this.handleChanges}
                value={this.state.credentials.username}
              />
              <p> Password </p>
              <input
                placeholder="Enter password"
                name="password"
                onChange={this.handleChanges}
                value={this.state.credentials.password}
              />
            </div>
          </form>

          <button className="login-button" onClick={this.login}>
            {" "}
            Log in{" "}
          </button>
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
