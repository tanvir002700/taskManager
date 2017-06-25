import { ADD_TASK, DELETE_TASK } from '../constants';

const task = (action) => {
    return {
        task: action.payload,
        id: Math.random()
    };
}

const removeTask = (state, action) => {
    const tasks = state.filter( task => task.id !== action.payload);
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
        default:
            return state;
    }
}

export default tasks;