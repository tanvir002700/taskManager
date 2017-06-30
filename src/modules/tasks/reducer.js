import * as t from './action_types';
import * as Task from './model';

export default (state = [], action) => {
    let new_state = null;
    switch (action.type) {
        case t.ADD:
            console.log('State before update', state);
            new_state = [...state, new Task.create(action.payload)];
            console.log('State after update', new_state);
            return new_state;
        case t.COMPLETE:
            new_state = [...state];
            Task.makeComplete(new_state[0]);
            return new_state;
        default:
            return state;
    }
};