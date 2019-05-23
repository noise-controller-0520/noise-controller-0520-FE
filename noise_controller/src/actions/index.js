import { axiosWithAuth } from "../axiosWithAuth";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("https://noise-controller-api.herokuapp.com/auth/login", creds)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("teacher", res.data.teacher.id);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
        console.log(err)
      dispatch({ type: LOGIN_FAILURE, payload: err.response });
    });
};

export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUp = newUser => dispatch => {
  dispatch({ type: SIGN_UP_START });
  return axiosWithAuth()
    .post("https://noise-controller-api.herokuapp.com/auth/register", newUser)
    .then(res => {
      dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SIGN_UP_FAILURE, payload: err.response });
    });
};

export const ADD_CLASSROOM_START = "ADD_CLASSROOM_START";
export const ADD_CLASSROOM_SUCCESS = "ADD_CLASSROOM_SUCCESS";
export const ADD_CLASSROOM_FAILURE = "ADD_CLASSROOM_FAILURE";

export const addClassroom = newClassroom => dispatch => {
  dispatch({ type: ADD_CLASSROOM_START });
  axiosWithAuth()
    .post("https://noise-controller-api.herokuapp.com/classes", newClassroom)
    .then(res => {
        console.log(res)
      localStorage.setItem("class", res.data.id);
      dispatch({ type: ADD_CLASSROOM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_CLASSROOM_FAILURE, payload: err.response });
    });
};

export const DELETE_CLASSROOM_START = "DELETE_CLASSROOM_START";
export const DELETE_CLASSROOM_SUCCESS = "DELETE_CLASSROOM_SUCCESS";
export const DELETE_CLASSROOM_FAILURE = "DELETE_CLASSROOM_FAILURE";

export const deleteClassroom = id => dispatch => {
  dispatch({ type: DELETE_CLASSROOM_START });
  axiosWithAuth()
    .delete(`https://noise-controller-api.herokuapp.com/classes/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_CLASSROOM_SUCCESS, payload: id });
    })
    .catch(err => {
      dispatch({ type: DELETE_CLASSROOM_FAILURE, payload: err.response });
    });
};

export const FETCH_CLASSROOM_START = "FETCH_DATA_START";
export const FETCH_CLASSROOM_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_CLASSROOM_FAILURE = "FETCH_DATA_FAILURE";
export const USER_UNAUTHORIZED = "FETCH_DATA_FAILURE";

export const getClassroom = id => dispatch => {
  dispatch({ type: FETCH_CLASSROOM_START });
  axiosWithAuth()
    .get(`https://noise-controller-api.herokuapp.com/classes/${id}`)
    .then(res => {
      dispatch({ type: FETCH_CLASSROOM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("call failed: ", err.response);
      if (err.response.status === 403) {
        dispatch({ type: USER_UNAUTHORIZED, payload: err.response });
      } else {
        dispatch({ type: FETCH_CLASSROOM_FAILURE, payload: err.response });
      }
    });
};

export const FETCH_SCORES_START = "FETCH_SCORES_START";
export const FETCH_SCORES_SUCCESS = "FETCH_SCORES_SUCCESS";
export const FETCH_SCORES_FAILURE = "FETCH_SCORES_FAILURE";

export const getScores = id => dispatch => {
  dispatch({ type: FETCH_SCORES_START });
  axiosWithAuth()
    .get(`https://noise-controller-api.herokuapp.com/sessions/${id}`)
    .then(res => {
      dispatch({ type: FETCH_SCORES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_SCORES_FAILURE, payload: err.response });
    });
};


export const SEND_SCORES_START = "SEND_SCORES_START";
export const SEND_SCORES_SUCCESS = "SEND_SCORES_SUCCESS";
export const SEND_SCORES_FAILURE = "SEND_SCORES_FAILURE";

export const endGame = id => dispatch => {
    dispatch({ type: SEND_SCORE_START });
    axiosWithAuth()
      .post('https://noise-controller-api.herokuapp.com/sessions', id)
      .then(res => {
          console.log("res", res)
        dispatch({ type: SEND_SCORE_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: SEND_SCORE_FAILURE, payload: err.response });
      });
  };


