import React from "react";
import './Scoreboard.css';
import { connect } from "react-redux";
import { getScores } from "../../actions";

class ScoreBoard extends React.Component {
state = {
    scores:[]
}

componentDidMount() {
    const teacherId = localStorage.getItem("teacher");
    this.props.getScores(teacherId);
  }

  render() {
    return (
      <div>
    
        <h1> Daily Scores </h1>

        <h1> Past Scores </h1>


      </div>
    );
  }
}

const mapStateToProps = state => ({
    scores: state.ScoresReducer.scores
  });
  

  export default connect(
    mapStateToProps,
    {
        getScores
    }
  )(ScoreBoard);
  
