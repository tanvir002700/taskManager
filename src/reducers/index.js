import {combineReducers} from 'redux';
import tasks from './task_reducer';

const allReducers = combineReducers({
    tasks: tasks
});

export default allReducers;