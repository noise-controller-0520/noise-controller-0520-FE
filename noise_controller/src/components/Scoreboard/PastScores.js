import React from 'react';
import { withRouter } from 'react-router-dom';

function PastScores(props) {


    return (
        <div>
            { props.score.past_score }
        </div>
    )
}

export default withRouter(PastScores);


