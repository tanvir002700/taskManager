import { combineReducers } from 'redux';
import tasks from './modules/tasks';

export default combineReducers({
    [tasks.constants.NAME]: tasks.reducer
});