import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './root_reducer';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './components/app';

injectTapEventPlugin();

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
        document.getElementById('root')
);
