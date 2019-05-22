import React from "react";
import "./ScoresPage.css";
import { connect } from "react-redux";
import { getScores } from "../../actions";
// import PastScores from "./PastScores";
import Scores from './Scores';

class ScoresPage extends React.Component {
  

  componentDidMount() {
    const classId = localStorage.getItem("class");
    this.props.getScores(classId);
  }

  render() {
    console.log(this.props.scores)
    return (
      <div>

        <div className='scores'>
          <h1> Today's Scores </h1>
       
          {this.props.scores &&
            this.props.scores.map(score => (
              <Scores score={score} />
            ))}

        </div>

          
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      scores: state.ScoresReducer.scores
    };
  };
  
  export default connect(
    mapStateToProps,
    { getScores }
  )(ScoresPage);
