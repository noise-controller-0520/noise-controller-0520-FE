import React from "react";

class SignUp extends React.Component {
  state = {
    teacher: {
      firstName: '',
      lastName: '',
      className: '',
      username: '',
      password: ''
    }
  };

  handleChanges = e => {
      this.setState({
          teacher: {
              ...this.state.teacher, 
              [e.target.name]: e.target.value
          }
      })
  }

  render() {
    return (
      <div>
        <form>
          <input
          placeholder='First Name'
          name='firstName'
          onChange={this.handleChanges}
          value={this.state.teacher.firstName}
           />

          <input
          placeholder='Last Name'
          name='lastName'
          onChange={this.handleChanges}
          value={this.state.teacher.lastName}
           />

          <input
          placeholder='Class Name'
          name='className'
          onChange={this.handleChanges}
          value={this.state.teacher.className}
           />

          <input
          placeholder='Username'
          name='username'
          onChange={this.handleChanges}
          value={this.state.teacher.username}
           />

          <input
          placeholder='Password'
          name='password'
          onChange={this.handleChanges}
          value={this.state.teacher.password}
           />

        </form>

        <button> Submit </button>
      </div>
    );
  }
}

export default SignUp;
