import {ADD_TASK} from '../constants';

const addTask = (task) => {
    return {
        type: ADD_TASK,
        payload: task
    };
};

export default addTask;