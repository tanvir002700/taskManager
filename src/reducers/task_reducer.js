import {ADD_TASK, DELETE_TASK, COMPLETE_TASK, ACTIVE_TASK} from '../constants';
import {bake_cookie, read_cookie} from 'sfcookies';

const task = (action) => {
    return {
        task: action.payload,
        status: 'active',
        id: Math.random()
    };
};

const removeTask = (state, action) => {
    const tasks = state.filter(task => task.id !== action.payload);
    return tasks;
};

const completeTask = (state, action) => {
    const tasks = state.map(task => {
        if (task.id === action.payload) {
            task.status = 'complete';
        }
        return task;
    });
    return tasks;
};

const activeTask = (state, action) => {
    const tasks = state.map(task => {
        if (task.id === action.payload) {
            task.status = 'active';
        }
        return task;
    });
    return tasks;
};

const tasks = (state = [], action) => {
    let tasks = [];
    state = read_cookie('tasks');
    switch (action.type) {
        case ADD_TASK:
            tasks = [...state, task(action)];
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