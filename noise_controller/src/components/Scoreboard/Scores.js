import React from "react";
import { withRouter } from "react-router-dom";
import "./Scores.css";

function Scores(props) {

  const theDate = () => {
    return new Date().toDateString();
  };


  return (
    <h3 className="daily-scores">

      <div>{theDate()}</div>

      Score: {props.score.score}
      
   

    </h3>
  );
}

export default withRouter(Scores);
