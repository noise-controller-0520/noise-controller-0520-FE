import React from "react";
import "./Scoreboard.css";
import { connect } from "react-redux";
import { getScores } from "../../actions";
import PastScores from "./PastScores";

class ScoreBoard extends React.Component {
    
  componentDidMount() {
    const classId = localStorage.getItem("class");
    this.props.getScore(classId);
  }

  render() {
    return (
      <div>
        <div>
          <h1> Daily Scores </h1>

          {this.props.scores.daily_score}
        </div>

        <div>
          <h1> Past Scores </h1>

          {this.props.scores &&
            this.props.scores.map(score => <PastScores score={score} />)}
        </div>
      </div>
    );
  }
}

export default connect({
  getScores
})(ScoreBoard);
