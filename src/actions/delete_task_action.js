import { DELETE_TASK } from '../constants';

const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
};

export default deleteTask;