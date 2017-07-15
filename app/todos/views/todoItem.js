import React, {PropTypes} from 'react';
import css from './style.css';

const TodoItem = ({onToggle, onRemove, completed, text }) => {
  const checkedProp = completed ? {checked: true} : {};
  return (
    <li
      className={css.todo_item}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <input className={css.toggle} type="checkbox" {...checkedProp} readOnly onClick={onToggle} />
      <label className={css.text}>{text}</label>
      <button className={css.remove} onClick={onRemove}>×</button>
    </li>
  );
}


TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem;