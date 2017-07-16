import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import css from './style.css';

class TodoItem extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  
  render(){
    const checkedProp = this.props.completed ? {checked: true} : {};
    return (
      <li
        className={css.todo_item}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >
        <input className={css.toggle} type="checkbox" {...checkedProp} readOnly onClick={this.props.onToggle} />
        <label className={css.text}>{this.props.text}</label>
        <button className={css.remove} onClick={this.props.onRemove}>×</button>
      </li>
    );
  }
}


TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps;
  return {
    onToggle: () => dispatch(toggleTodo(id)),
    onRemove: () => dispatch(removeTodo(id))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);