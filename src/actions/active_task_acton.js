import {ACTIVE_TASK} from '../constants';

const activeTask = (id) => {
    return {
        type: ACTIVE_TASK,
        payload: id
    }
};

export default activeTask;