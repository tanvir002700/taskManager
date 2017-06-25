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
    console.log('state from complete task: ', state);
    const tasks = state.map(task => {
        if(task.id === action.payload) {
            task.status = 'complete';
        }
        return task;
    });
    console.log('new complete state: ', tasks);
    return tasks;
};

const activeTask = (state, action) => {
    const tasks = state.map(task => {
        if(task.id === action.payload) {
            task.status = 'active';
        }
        return task;
    });
    console.log('new complete state: ', tasks);
    return tasks;
}

const tasks = (state = [], action) => {
    let tasks = null;
    console.log('Came to redurecs......');
    switch (action.type) {
        case ADD_TASK:
            console.log('state before new add: ', state);
            tasks = [...state, task(action)];
            console.log('New State: ',tasks);
            return tasks;
        case DELETE_TASK:
            console.log('state before new delete: ', state);
            console.log('action before new delete: ', action);
            tasks = removeTask(state, action);
            console.log('New State: ',tasks);
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