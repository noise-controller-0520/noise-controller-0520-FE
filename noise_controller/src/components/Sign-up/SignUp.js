import React from "react";

import "./SignUp.css";

import { connect } from "react-redux";
import { signUp } from "../../actions";
import { Link } from "react-router-dom";

import NavBar from '../NavBar/NavBar'

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
        <NavBar />       
        <form onSubmit={this.signUp} className="form-container">
          <h1>Sign-up to Play!</h1>
          
          <div className='align-form'>
          <p>First Name</p>
          <input
            className="sign-input"
            name="first_name"
            required
            onChange={this.handleChanges}
            value={this.state.teacher.first_name}
          />

          <p>Last Name</p>
          <input
            className="sign-input"
            name="last_name"
            required
            onChange={this.handleChanges}
            value={this.state.teacher.last_name}
          />

          <p>Email</p>
          <input
            className="sign-input"
            name="email"
            required
            onChange={this.handleChanges}
            value={this.state.teacher.email}
          />

          <p>Username</p>
          <input
            className="sign-input"
            name="username"
            required
            onChange={this.handleChanges}
            value={this.state.teacher.username}
          />

          <p>Password</p>
          <input
            className="sign-input"  
            name="password"
            type='password'
            required
            onChange={this.handleChanges}
            value={this.state.teacher.password}
          />
          </div>

          <button className="submit-button"> Submit </button>
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
