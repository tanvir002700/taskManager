import { DELETE_TASK } from '../constants';

const deleteTask = (id) => {
    console.log('Hit action Delete for: ', id);
    return {
        type: DELETE_TASK,
        payload: id
    }
};

export default deleteTask;