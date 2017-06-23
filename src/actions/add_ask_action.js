import { ADD_REMINER } from '../contents';

const addReminder = (task) => {
    console.log('Hit action ->>> ', task);
    return {
        action: ADD_REMINER,
        payload: task
    };
};

export default addReminder;