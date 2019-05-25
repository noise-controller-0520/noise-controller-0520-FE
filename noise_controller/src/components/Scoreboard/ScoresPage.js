import React from "react";
import "./ScoresPage.css";
import { connect } from "react-redux";
import { getScores, getHighScore } from "../../actions";
import Scores from "./Scores";
import { Link } from "react-router-dom";
import NavBar from '../NavBar/NavBar'
import moment from 'moment'

class ScoresPage extends React.Component {
  state = {
    className: localStorage.getItem("name"),
    highScore: null,
    highScoreDate: null
  };

  componentDidMount() {
    const classId = localStorage.getItem("class");
    this.props.getScores(classId);
    this.getHighScore()
  }

  getHighScore = async () => {
    console.log('props.scores', this.props.scores)
    
    // find max score in props.scores
    let topScore;
    if (this.props.scores.length > 0) {
      topScore = this.props.scores.reduce((prev, current) => prev.score > current.score ? prev : current)
      localStorage.setItem('topScore', topScore.score)
      localStorage.setItem('topScoreDate', topScore.created_at)
    }
  };

  render() {
    // console.log(this.getHighScore());
    const topDate = moment(localStorage.getItem("topScoreDate")).format("MMM Do YY")
    const topScore = localStorage.getItem("topScore")

    return (
      <div className="center">
        <NavBar />
        <div className="scores">
          <h1 className="classroom">{this.state.className}</h1>
          <h1> High Score </h1>
          <div className="daily-scores">
            <div>{topDate}</div>
              {topScore}
          </div>

          <h1> Daily Scores </h1>

          {this.props.scores &&
          // reverse scores array to show most recent at the top
            this.props.scores.reverse().map(score => (
              <Scores score={score} key={score.id} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    scores: state.ScoresReducer.scores,
    highScore: state.ScoresReducer.highScore
  };
};

export default connect(
  mapStateToProps,
  { getScores, getHighScore }
)(ScoresPage);
