import React from "react";
import "./ScoresPage.css";
import { connect } from "react-redux";
import { getScores, getHighScore } from "../../actions";
import Scores from "./Scores";
import { Link } from "react-router-dom";

class ScoresPage extends React.Component {
  state = {
    className: localStorage.getItem("name")
  };

  componentDidMount() {
    const classId = localStorage.getItem("class");
    this.props.getScores(classId);
  }

  getHighScore = () => {
    return this.props.scores.map(score => score.score);
  };

  theDate = () => {
    return new Date().toDateString();
  };

  render() {
    console.log(this.getHighScore());
    return (
      <div className="center">
        <nav>
          <a href="https://thenoisecontroller.netlify.com/"> Learn more! </a>

          <Link to="/classrooms"> Classrooms </Link>

          <Link to="/game-page/:id"> Play </Link>

          <Link to="/scoreboard"> Scoreboard </Link>

          <Link to="/login"> Log Out </Link>
        </nav>
        <div className="scores">
          <h1 className="classroom">{this.state.className}</h1>
          <h1> High Score </h1>
          <div className="daily-scores">
            <div>{this.theDate()}</div>
            Score: {Math.max(...this.getHighScore())}
          </div>

          <h1> Daily Scores </h1>

          {this.props.scores &&
            this.props.scores.map(score => (
              <Scores score={score} key={score.id} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    scores: state.ScoresReducer.scores,

    highScore: state.ScoresReducer.highScore
  };
};

export default connect(
  mapStateToProps,
  { getScores, getHighScore }
)(ScoresPage);
