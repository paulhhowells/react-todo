import React from 'react';
import PropTypes from 'prop-types';

function TodoItem ({
  name,
  done,
  handleDone,
  handleRemove,
  className='',
  children,
  ...props
}) {
  className = `todo__item ${done && 'todo__item--done'} ${className}`;

  return (
    <li className={className} {...props}>
      {!done && (
        <button
          className="todo__item-add"
          onClick={handleDone}
          type="button">
          done
        </button>
      )}
      <span className="todo__item-name">{name} {children}</span>
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
  handleDone: PropTypes.func,
  handleRemove: PropTypes.func,
  className: PropTypes.string,
};

export default TodoItem;
