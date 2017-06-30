import * as t from './action_types';
import Task from './model';

export default (state = [], action) => {
    switch (action.type) {
        case t.ADD:
            console.log('State before update', state);
            let new_state = null;
            new_state = [...state, new Task(action.payload)];
            console.log('State after update', new_state);
            return new_state;
        default:
            return state;
    }
};