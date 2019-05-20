import { combineReducers } from 'redux';
import { LoginReducer } from './LoginReducer';
import { SignUpReducer } from './SignUpReducer';

export default combineReducers({
    SignUpReducer,
    LoginReducer
})