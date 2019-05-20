import { combineReducers } from 'redux';
import { LoginReducer } from './LoginReducer';
import { SignUpReducer } from './SignUpReducer';
import { ClassroomsReducer } from './ClassroomsReducer';

export default combineReducers({
    SignUpReducer,
    LoginReducer,
    ClassroomsReducer
})