import { ADD_TASK } from '../contents';

const addTask = (task) => {
    console.log('Hit action ->>> ', task);
    return {
        type: ADD_TASK,
        payload: task
    };
};

export default addTask;