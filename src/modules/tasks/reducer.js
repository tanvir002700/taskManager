import * as t from './action_types';

export default (state = [], action) => {
    switch (action.type) {
        case t.ADD:
            console.log('Came to this reducers');
            return [
                // ...
            ];
        default:
            return state;
        // ...
    }
};