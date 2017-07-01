import * as t from './action_types';

export const add = (task) => {
    return {
        type: t.ADD,
        payload: task
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