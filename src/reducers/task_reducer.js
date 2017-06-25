import { ADD_TASK, DELETE_TASK, COMPLETE_TASK, ACTIVE_TASK } from '../constants';

const task = (action) => {
    return {
        task: action.payload,
        status: 'active',
        id: Math.random()
    };
};

const removeTask = (state, action) => {
    const tasks = state.filter( task => task.id !== action.payload);
    return tasks;
};

const completeTask = (state, action) => {
    const tasks = state.map(task => {
        if(task.id === action.payload) {
            task.status = 'complete';
        }
        return task;
    });
    return tasks;
};

const activeTask = (state, action) => {
    const tasks = state.map(task => {
        if(task.id === action.payload) {
            task.status = 'active';
        }
        return task;
    });
    return tasks;
}

const tasks = (state = [], action) => {
    let tasks = null;
    switch (action.type) {
        case ADD_TASK:
            tasks = [...state, task(action)];
            return tasks;
        case DELETE_TASK:
            tasks = removeTask(state, action);
            return tasks;
        case COMPLETE_TASK:
            tasks = completeTask(state, action);
            return tasks;
        case ACTIVE_TASK:
            tasks = activeTask(state, action);
            return tasks;
        default:
            return state;
    }
};

export default tasks;