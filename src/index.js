import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import tasks from './modules/tasks';
import allReducers from './root_reducer';

const {AddTasks, AllTasksList, ActiveTasksList, CompleteTasksList} = tasks.components;

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
       <div>
           <AddTasks/>
           <AllTasksList/>
           <ActiveTasksList/>
           <CompleteTasksList/>
       </div>
    </Provider>,
        document.getElementById('root')
);
