import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';

import App from './App'
render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.querySelector('#root')
)