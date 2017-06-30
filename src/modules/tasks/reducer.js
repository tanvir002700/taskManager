import * as t from './action_types';
import * as Task from './model';

export default (state = [], action) => {
    let new_state = null;
    switch (action.type) {
        case t.ADD:
            console.log('State before update', state);
            new_state = Task.create(state, action.payload);
            console.log('State after update', new_state);
            return new_state;
        case t.COMPLETE:
            new_state = Task.makeComplete(state, action.payload);
            return new_state;
        case t.DELETE:
            new_state = Task.destroy(state, action.payload);
            return new_state;
        default:
            return state;
    }
};