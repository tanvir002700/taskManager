import { ADD_TASK } from '../constants';

const task = (action) => {
    return {
        task: action.payload,
        id: Math.random()
    };
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
        default:
            return state;
    }
}

export default tasks;