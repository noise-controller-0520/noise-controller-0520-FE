import {
FETCH_SCORES_START,
FETCH_SCORES_SUCCESS,
FETCH_SCORES_FAILURE,
SEND_SCORE_START,
SEND_SCORE_SUCCESS,
SEND_SCORE_FAILURE
} from '../actions';

const initialState = {
scores: [],
highScore: '',
fetchingScores: false,
fetchingHighScore: false,
error: ''
}

export const ScoresReducer = ( state = initialState, action ) => {

    switch (action.type) {
        case FETCH_SCORES_START: 
        return {
            ...state,
            fetchingScores: true,
            error: ''
        }

        case FETCH_SCORES_SUCCESS: 
        return {
            ...state,
            scores: action.payload,
            fetchingScores: false,
            error: ''
        }

        case FETCH_SCORES_FAILURE: 
        return {
            ...state,
            fetchingScores: false,
            error: ''
        }


        case SEND_SCORE_START: 
        return {
            ...state,
            sendingScore: true,
            error: ''
        }

        case SEND_SCORE_SUCCESS: 
        return {
            ...state,
            scores: [...state.scores, action.payload ],
            sendingScore: false,
            error: ''
        }

        case SEND_SCORE_FAILURE: 
        return {
            ...state,
            fetchingScore: false,
            error: ''
        }


        // case GET_HIGH_SCORE_START:
        // return {
        //     ...state,
        //     fetchingHighScore: true,
        //     error: ''
        // }

    //     case GET_HIGH_SCORE_SUCCESS:
    //     return {
    //         ...state,
    //         fetchingHighScore: false,
    //         scores: action.payload,
    //         //filter through the array to find the highest number 
    //    //     highScore: state.scores.filter (highScore => highScore.score )
    //         error: ''
    //     }

        // case GET_HIGH_SCORE_FAILURE:
        // return {
        //     ...state,
        //     fetchingHighScore: false,
        //     error: action.payload
        // }

        default:
        return state;
    }
}
