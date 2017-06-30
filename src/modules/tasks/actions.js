import * as t from './action_types';

export const add = (text) => ({
    type: t.ADD,
    payload: { text }
});
