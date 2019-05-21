import React from "react";

import "./SignUp.css";

import { connect } from "react-redux";
import { signUp } from "../../actions";

class SignUp extends React.Component {
  state = {
    teacher: {
      first_name: "",
      last_name: "",
      email: "",
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
        <form onSubmit={this.signUp} className="form-container">
          <h1>Sign-up to Play!</h1>
          <input
            placeholder="First Name"
            name="first_name"
            required
            onChange={this.handleChanges}
            value={this.state.teacher.first_name}
          />

          <input
            placeholder="Last Name"
            name="last_name"
            required
            onChange={this.handleChanges}
            value={this.state.teacher.last_name}
          />

          <input
            placeholder="Email"
            name="email"
            required
            onChange={this.handleChanges}
            value={this.state.teacher.email}
          />

          <input
            placeholder="Username"
            name="username"
            required
            onChange={this.handleChanges}
            value={this.state.teacher.username}
          />

          <input
            placeholder="Password"
            name="password"
            required
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
