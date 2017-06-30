import * as action from './actionTypes';

export const add = (text) => ({
    type: action.ADD,
    payload: { text }
});
