//main.js
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';

import TodoApp from './TodoApp';
import store from './Store';

ReactDom.render(
    <Provider store = {store}>
        <TodoApp />
    </Provider>,
    document.getElementById('content')
);