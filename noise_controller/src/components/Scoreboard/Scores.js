import React from 'react';
import { withRouter } from 'react-router-dom';

function Scores(props) {
console.log(props.score)

    return (
        <div>
            <h1>
           {props.score.score}
           </h1>
        </div>
    )
}

export default withRouter(Scores);


