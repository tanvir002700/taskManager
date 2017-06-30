import * as t from './action_types';

export const add = (text) => {
    console.log('Came for trigger action:');
    return {
        type: t.ADD,
        payload: text
    };
};
