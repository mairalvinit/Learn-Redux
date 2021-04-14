
import counterReducer from "./counter";
import isLoggedReducer from './isLoggedIn';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter : counterReducer,
    logged : isLoggedReducer
})

export default allReducers;