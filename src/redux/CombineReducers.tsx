import { combineReducers } from "redux";

import counter from './CounterReducer';
import auth from './AuthReducer';

const allReducers = combineReducers({
    counter,
    auth
})

export default allReducers;