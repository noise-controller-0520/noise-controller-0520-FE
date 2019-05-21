import {
   ADD_CLASSROOM_START,
   ADD_CLASSROOM_SUCCESS,
   ADD_CLASSROOM_FAILURE,
   DELETE_CLASSROOM_START,
   DELETE_CLASSROOM_SUCCESS,
   DELETE_CLASSROOM_FAILURE,
   FETCH_CLASSROOM_START,
   FETCH_CLASSROOM_SUCCESS
} from '../actions';

const initialState = {
    classrooms: [
      //  {classroom: '5th Period Geometry', id: 0 },
      //  {classroom: '3rd Period Literature', id:1 }
    ],
    addingClass: false,
    error: '',
    count: 1,
    fetchingClassrooms: false
}

export const ClassroomsReducer = ( state = initialState, action ) => {
switch (action.type) {
    case ADD_CLASSROOM_START:
    return {
        ...state,
        addingClass: true
    }
    case ADD_CLASSROOM_SUCCESS:
    const idCounter = ++state.count;
    const newState = [...state.classrooms, {classroom: action.payload, id: idCounter} ]
    return {
        ...state,
        addingClass: false,
        classrooms: newState,
        count: idCounter
         
    }
    case ADD_CLASSROOM_FAILURE:
    return {
        ...state,
        addingClass: false,
        error: action.payload
    }

    case DELETE_CLASSROOM_START:
    return {
        ...state,
        error: ''
    }
    case DELETE_CLASSROOM_SUCCESS:
    return {
        ...state,
        error: ''
    }
    case DELETE_CLASSROOM_FAILURE:
    return {
        ...state,
        error: action.payload
    }

    case FETCH_CLASSROOM_START:
    return {
      ...state,
      fetchingClassrooms: true
    };
  case FETCH_CLASSROOM_SUCCESS:
    return {
      ...state,
      error: '',
      errorStatusCode: null,
      fetchingClassrooms: false,
      friends: action.payload
    };

    default:
    return state;
}

}