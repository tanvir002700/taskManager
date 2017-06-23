import { ADD_REMINDER } from '../contents';

const task = (action) => {
    return {
        task: action.payload,
        id: Math.random()
    };
}

const tasks = (state = [], action) => {
    let tasks = null;
    switch (action.type) {
        case ADD_REMINDER:
            console.log('state before new add: ', state);
            tasks = [...state, task(action)];
            return tasks;
        default:
            return state;
    }
}

export default tasks;