import React from "react";
import "./ScoresPage.css";
import { connect } from "react-redux";
import { getScores } from "../../actions";
import Scores from './Scores';

let className;
class ScoresPage extends React.Component {
  
  componentDidMount() {
    const classId = localStorage.getItem("class");
    className = localStorage.getItem("name");
    console.log(className);
    this.props.getScores(classId);
  }

  render() {
    console.log(this.props.scores)
    return (
      <div className='center'>

        <div className='scores'>
        <h1 className="classroom">{className}</h1>
          <h1> Daily Scores </h1>
       
          {this.props.scores &&
            this.props.scores.map(score => (
              <Scores score={score} />
            ))}

            <h1> High Scores </h1>
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
