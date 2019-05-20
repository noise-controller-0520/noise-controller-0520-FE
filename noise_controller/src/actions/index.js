//import axios from 'axios';

import { axiosWithAuth } from '../axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    return axiosWithAuth()
    .post( 'https://noise-controller-api.herokuapp.com/auth/login', creds )
    .then(res => {
        localStorage.setItem('token', res.data.payload)
        dispatch ({ type: LOGIN_SUCCESS, payload: res.data.payload })
    })
    .catch(err => {
        dispatch ({ type: LOGIN_FAILURE, payload: err.response })
    })
}


export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUp = info => dispatch => {
    dispatch({ type: SIGN_UP_START })
    return axiosWithAuth()
    .post( 'https://noise-controller-api.herokuapp.com/auth/register', info )
    .then(res => {
        dispatch ({ type: SIGN_UP_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch ({ type: SIGN_UP_FAILURE, payload: err.response })
    })
}


export const ADD_CLASSROOM_START = "ADD_CLASSROOM_START"
export const ADD_CLASSROOM_SUCCESS = "ADD_CLASSROOM_SUCCESS"
export const ADD_CLASSROOM_FAILURE = "ADD_CLASSROOM_FAILURE"

export const addClassroom = newClassroom => dispatch => {
    dispatch({ type: ADD_CLASSROOM_START })
    axiosWithAuth()
    .post(' https://noise-controller-api.herokuapp.com/classes', newClassroom)
    .then(res => {
        dispatch ({ type: ADD_CLASSROOM_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch ({ type: ADD_CLASSROOM_FAILURE, payload: err.response })
    })
}

export const REMOVE_CLASSROOM_START = "REMOVE_CLASSROOM_START"
export const REMOVE_CLASSROOM_START = "REMOVE_CLASSROOM_START"
export const REMOVE_CLASSROOM_START = "REMOVE_CLASSROOM_START"

export const removeClassroom = id => dispatch => {
    dispatch({ type: REMOVE_CLASSROOM_START })
    axiosWithAuth()
    .delete('https://noise-controller-api.herokuapp.com/:id', id)
    .then(res => {
        dispatch ({ type: REMOVE_CLASSROOM_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch ({ type: REMOVE_CLASSROOM_FAILURE, payload: err.response })
    })
}


export const TOGGLE_CLASSROOM_START = "TOGGLE_CLASSROOM";
export const TOGGLE_CLASSROOM_START = "TOGGLE_CLASSROOM";
export const TOGGLE_CLASSROOM_START = "TOGGLE_CLASSROOM";

export const toggleClassroom = id => dispatch => {
    dispatch({ type: REMOVE_CLASSROOM_START })
    axiosWithAuth()
    .put('https://noise-controller-api.herokuapp.com/:id', id)
    .then(res => {
        dispatch ({ type: REMOVE_CLASSROOM_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch ({ type: REMOVE_CLASSROOM_FAILURE, payload: err.response })
    })
}

