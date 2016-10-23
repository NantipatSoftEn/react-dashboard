import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import breadCrumbReducer from './breadCrumbReducer';

const reducers = combineReducers({
	todoState: todoReducer,
	breadCrumbState: breadCrumbReducer
});

export default reducers;
