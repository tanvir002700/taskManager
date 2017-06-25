import { COMPLETE_TASK } from '../constants';

function completeTask(id) {
    return {
        type: COMPLETE_TASK,
        payload: id
    }
}

export default completeTask;