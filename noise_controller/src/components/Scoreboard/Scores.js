import React from "react";
import { withRouter } from "react-router-dom";
import "./Scores.css";
import moment from 'moment'

function Scores(props) {
  // const theDate = () => {
  //   return new Date().toDateString();
  // };

  return (
    <h3 className="daily-scores">
      <div>{moment(props.score.created_at).format("MMM Do YY")}</div>
      Score: {props.score.score}
    </h3>
  );
}

export default withRouter(Scores);
