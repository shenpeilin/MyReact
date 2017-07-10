//main.js
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import ControlPanel from './components/ControlPanel.jsx';
import store from './stores/Store'

ReactDom.render(
    <Provider store = {store}>
        <ControlPanel />
    </Provider>,
    document.getElementById('content')
);