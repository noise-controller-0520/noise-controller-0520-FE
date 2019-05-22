import {
  ADD_CLASSROOM_START,
  ADD_CLASSROOM_SUCCESS,
  ADD_CLASSROOM_FAILURE,
  DELETE_CLASSROOM_START,
  DELETE_CLASSROOM_SUCCESS,
  DELETE_CLASSROOM_FAILURE,
  FETCH_CLASSROOM_START,
  FETCH_CLASSROOM_SUCCESS
} from "../actions";

const initialState = {
  classrooms: [],
  addingClass: false,
  error: "",
  fetchingClassrooms: false,
  deletingClass: false,
};

export const ClassroomsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CLASSROOM_START:
      return {
        ...state,
        addingClass: true
      };
    case ADD_CLASSROOM_SUCCESS:
      const newState = [...state.classrooms, action.payload];
      return {
        ...state,
        addingClass: false,
        classrooms: newState
      };
    case ADD_CLASSROOM_FAILURE:
      return {
        ...state,
        addingClass: false,
        error: action.payload
      };

    case DELETE_CLASSROOM_START:
      return {
        ...state,
        deletingClass: true,
        error: ""
      };
    case DELETE_CLASSROOM_SUCCESS:
    return {
        ...state,
        deletingClass: false,
        classrooms: state.classrooms.filter( classroom => classroom.id !== action.payload )
      };
    case DELETE_CLASSROOM_FAILURE:
      return {
        ...state,
        deletingClass: false,
        error: action.payload
      };

    case FETCH_CLASSROOM_START:
      return {
        ...state,
        fetchingClassrooms: true
      };
    case FETCH_CLASSROOM_SUCCESS:
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        fetchingClassrooms: false,
        classrooms: action.payload
      };

    default:
      return state;
  }
};
