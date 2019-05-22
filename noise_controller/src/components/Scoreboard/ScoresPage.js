import React from "react";
import "./ScoresPage.css";
import { connect } from "react-redux";
import { getScores } from "../../actions";
import PastScores from "./PastScores";
import DailyHighScore from './DailyHighScore';

class ScoresPage extends React.Component {
  

  componentDidMount() {
    const classId = localStorage.getItem("class");
    this.props.getScores(classId);
  }

  render() {
    return (
      <div>

        <div>
          <h1> Daily Scores </h1>
       
          {this.props.scores &&
            this.props.scores.map(score => (
              <DailyHighScore score={score} />
            ))}

        </div>

        <div>
          <h1> Old Scores </h1>

           
            <PastScores /> 
           
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
   //   scores: state.ScoresReducer.scores
    };
  };
  
  export default connect(
    mapStateToProps,
    { getScores }
  )(ScoresPage);
