import React from 'react';
import PropTypes from 'prop-types';
import Toggle from '../Toggle/';

function TodoItem ({
  id,
  name,
  done,
  handleChangeDone,
  handleRemove,
  className='',
  children,
  ...props
}) {
  className = `todo__item ${done ? 'todo__item--done' : ''} ${className}`;

  return (
    <li className={className} {...props}>
      <Toggle
        id={id}
        className="todo__item-add"
        checked={done}
        handleChange={handleChangeDone}
      />
      <label
        htmlFor={id}
        className="todo__item-name"
      >
        {name} {children}
      </label>
      <button
        className="todo__item-remove"
        onClick={handleRemove}
        type="button">remove</button>
    </li>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string,
  done: PropTypes.bool,
  handleChangeDone: PropTypes.func,
  handleRemove: PropTypes.func,
  className: PropTypes.string,
};

export default TodoItem;
