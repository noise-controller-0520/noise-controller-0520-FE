import React from "react";

import "./SignUp.css";

import { connect } from "react-redux";
import { signUp } from "../actions";

class SignUp extends React.Component {
  state = {
    teacher: {
      firstName: "",
      lastName: "",
      className: "",
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      teacher: {
        ...this.state.teacher,
        [e.target.name]: e.target.value
      }
    });
  };

  signUp = e => {
    e.preventDefault();

    this.props.signUp(this.state.teacher).then(() => {
      this.props.history.push("/login");
    });
  };

  render() {
    return (
      <div className="background">
        <form className="form-container">
          <h1>Sign-up to Play!</h1>
          <input
            placeholder="First Name"
            name="firstName"
            onChange={this.handleChanges}
            value={this.state.teacher.firstName}
          />

          <input
            placeholder="Last Name"
            name="lastName"
            onChange={this.handleChanges}
            value={this.state.teacher.lastName}
          />

          <input
            placeholder="Class Name"
            name="className"
            onChange={this.handleChanges}
            value={this.state.teacher.className}
          />

          <input
            placeholder="Username"
            name="username"
            onChange={this.handleChanges}
            value={this.state.teacher.username}
          />

          <input
            placeholder="Password"
            name="password"
            onChange={this.handleChanges}
            value={this.state.teacher.password}
          />

          <button> Submit </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  signingUp: state.signingUp
});

export default connect(
  mapStateToProps,
  { signUp }
)(SignUp);
