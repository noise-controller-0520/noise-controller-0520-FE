import {
FETCH_SCORES_START,
FETCH_SCORES_SUCCESS,
FETCH_SCORES_FAILURE 
} from '../actions';

const initialState = {
scores: [],
fetchingScores: false,
error: ''
}

export const ScoresReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCH_SCORES_START: 
        return {
            ...start,
            fetchingScores: true,
            error: ''
        }

        case FETCH_SCORES_SUCCESS: 
        return {
            ...start,
            scores: action.payload,
            fetchingScores: false,
            error: ''
        }

        case FETCH_SCORES_FAILURE: 
        return {
            ...start,
            fetchingScores: false,
            error: ''
        }

        default:
        return state;
    }
}
