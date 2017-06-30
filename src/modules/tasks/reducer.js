import * as t from './action_types';
import * as Task from './model';
import { bake_cookie, read_cookie } from 'sfcookies'

export default (state = Task.initial_state, action) => {
    let new_state = null;
    state = read_cookie('tasks');
    switch (action.type) {
        case t.ADD:
            console.log('State before update', state);
            new_state = Task.create(state, action.payload);
            console.log('State after update', new_state);
            break;
        case t.COMPLETE:
            new_state = Task.makeComplete(state, action.payload);
            break;
        case t.DELETE:
            new_state = Task.destroy(state, action.payload);
            break;
        default:
            return state;
    }
    bake_cookie('tasks', new_state);
    return new_state;
};