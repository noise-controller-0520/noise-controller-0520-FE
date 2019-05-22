import React from 'react';
import { withRouter } from 'react-router-dom';
import './Scores.css';

function Scores(props) {
console.log(props.score)

    return (
        <h3 className='daily-scores'>
          Score: {props.score.score}
        </h3>
    )
}

export default withRouter(Scores);


