import React from "react";
import "./Login.css";
import { connect } from "react-redux";
import { login } from "../../actions";
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar';

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
    token: false
  };

  componentDidMount() {
    localStorage.removeItem("token");
    localStorage.removeItem("teacher");
    localStorage.removeItem("class");
    localStorage.removeItem("name");
    // calling setState here to force an additional render and get the Nav to render correctly
    this.setState({
      token: false
    })
  }

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
      if (localStorage.getItem("token")) {
        this.props.history.push("/classrooms");
      } else {
        // Flash a message saying Invalid Credentials or something like that
      }
    });
  };

  render() {
    console.log('render')
    return (
      <div className="background2">
        <NavBar />
        <div className="login-container">
          <h1> Login </h1>
          <form onSubmit={this.login} className="align-form">
            <p> Username </p>
            <input
              className="sign-input"
              placeholder="Enter username"
              name="username"
              onChange={this.handleChanges}
              value={this.state.credentials.username}
            />
            <p> Password </p>
            <input
              className="sign-input"
              placeholder="Enter password"
              name="password"
              type='password'
              onChange={this.handleChanges}
              value={this.state.credentials.password}
            />
          </form>

          <button className="login-button" onClick={this.login}>
            {" "}
            Login{" "}
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
