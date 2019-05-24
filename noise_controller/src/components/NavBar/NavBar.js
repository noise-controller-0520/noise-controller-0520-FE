import React from "react";

import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(props) {
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("teacher");
    props.history.push("/login");
  };

  return (
    <nav>
      <Link to="/"> Sign-Up </Link>

      <Link to="/login"> Login </Link>

      <a href="https://thenoisecontroller.netlify.com/"> Learn more! </a>

      <Link to="/classrooms"> Classrooms </Link>

      <Link to="/game-page/:id"> Play </Link>

      <Link to="/scoreboard"> Scoreboard </Link>

      <Link onClick={logout}> Log Out </Link>
    </nav>
  );
}

export default NavBar;
