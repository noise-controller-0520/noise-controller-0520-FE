import React from "react";

import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  // const logout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("teacher");
  //   props.history.push("/login");
  // };

  return (
    <nav>
      <a href="https://thenoisecontroller.netlify.com/"> Learn more! </a>

      {localStorage.getItem("token") &&
        <Link to="/classrooms"> My Classrooms </Link>
      }

      {!localStorage.getItem("token") &&
        <Link to="/"> Sign-Up </Link>
      }

      <Link to="/login">{localStorage.getItem("token") ? 'Logout' : 'Login'} </Link>
    </nav>
  );
}

export default NavBar;
