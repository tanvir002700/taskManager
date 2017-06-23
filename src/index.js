import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allRedures from './reducers';

const store = createStore(allRedures);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);
