import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, ACTIVE_TASK } from '../constants';
import { createTask, removeTask, completeTask, activeTask } from './helper/task_helper';
import { bake_cookie, read_cookie } from 'sfcookies';

const tasks = (state = [], action) => {
    let tasks = [];
    state = read_cookie('tasks');
    switch (action.type) {
        case ADD_TASK:
            tasks = [...state, createTask(action)];
            break;
        case DELETE_TASK:
            tasks = removeTask(state, action);
            break;
        case COMPLETE_TASK:
            tasks = completeTask(state, action);
            break;
        case ACTIVE_TASK:
            tasks = activeTask(state, action);
            break;
        default:
            return state;
    }
    bake_cookie('tasks', tasks);
    return tasks;
};

export default tasks;