import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {toggleTodo, removeTodo} from '../actions.js';
import {FilterTypes} from '../../constants.js';
import css from './style.css';
import {selectVisibleTodos} from '../selector.js';

const TodoList = ({todos}) => {
  return (
    <ul className={css.todo_list}>
    {
      todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
        />
        ))
    }
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};


const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state)
  };
}

/*
const mapDispatchToProps = (dispatch) => bindActionCreators({
  onToggleTodo: toggleTodo,
  onRemoveTodo: removeTodo
}, dispatch);
*/

export default connect(mapStateToProps, null)(TodoList);
