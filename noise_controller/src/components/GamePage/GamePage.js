import React from "react";
import "./GamePage.css";
import { withRouter } from "react-router-dom";
import Audio from "./Audio";
import "./GamePage.css";
import { Link } from "react-router-dom";

class GamePage extends React.Component {
  render() {
    return (
      <div className="jungle">
        <nav>
          <a href="https://thenoisecontroller.netlify.com/"> Learn more! </a>

          <Link to="/classrooms"> Classrooms </Link>

          <Link to="/game-page/:id"> Play </Link>

          <Link to="/scoreboard"> Scoreboard </Link>

          <Link to="/login"> Log Out </Link>
        </nav>
        <div className="audio-style">
          <Audio />
        </div>
      </div>
    );
  }
}

export default withRouter(GamePage);
