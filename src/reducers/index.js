import { combineRedures } from 'redux';
import { tasks } from './task_reducer';

const allReducers = combineRedures({
    tasks
});

export default allReducers;