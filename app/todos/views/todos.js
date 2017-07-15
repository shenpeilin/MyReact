import React from 'react';
import AddTodo from './addTodo.js';
import TodoList from './todoList.js';
import css from  './style.css';
console.log(css);

export default () => {
    return (
        <div className={css.todos}>
            <AddTodo />
            <TodoList />
        </div>
    );
}