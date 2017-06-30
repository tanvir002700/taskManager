import * as t from './action_types';

export const add = (text) => {
    console.log('Came for trigger action:');
    return {
        type: t.ADD,
        payload: text
    };
};

export const complete = (id) => {
    return {
        type: t.COMPLETE,
        payload: id
    }
};

export const destroy = (id) => {
    return {
        type: t.DELETE,
        payload: id
    }
};