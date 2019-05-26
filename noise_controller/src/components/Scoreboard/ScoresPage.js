import React from "react";
import "./ScoresPage.css";
import { connect } from "react-redux";
import { getScores, getHighScore } from "../../actions";
import Scores from "./Scores";
import NavBar from '../NavBar/NavBar'
import moment from 'moment'

class ScoresPage extends React.Component {
  state = {
    className: localStorage.getItem("name"),
    topScore: null,
    topScoreDate: null
  };

  componentDidMount() {
    const classId = localStorage.getItem("class");
    // TODO: we need this to finish getting the class scores before we run getHighScore()
    // otherwise we end up grabbing the top score from the previous list of scores
    this.props.getScores(classId)
    // hacky fix to wait for props to get updated before we calculate the highScore
    window.setTimeout(() => this.getHighScore(), 1000)
  }

  getHighScore = () => {
    console.log('props.scores', this.props.scores)
    
    // find max score in props.scores
    let topScore;
    if (this.props.scores.length > 0) {
      topScore = this.props.scores.reduce((prev, current) => prev.score > current.score ? prev : current)
      this.setState({
        topScore: topScore.score,
        topScoreDate: topScore.created_at
      })
    }
  };

  render() {
    // console.log(this.getHighScore());

    return (
      <div className="center">
        <NavBar />
        <div className="scores">
          <h1 className="classroom">{this.state.className}</h1>
          <h1> High Score </h1>
          <div className="daily-scores">
            <div>{moment(this.state.topScoreDate).format("MMM Do YY")}</div>
              {this.state.topScore}
          </div>

          <h1> Daily Scores </h1>

          {this.props.scores &&
          // reverse scores array to show most recent at the top
            [...this.props.scores].reverse().map(score => (
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
