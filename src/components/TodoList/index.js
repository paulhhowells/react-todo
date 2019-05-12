import React from 'react';
import TodoItem from '../TodoItem/';

function TodoList ({list, handleChangeDone, handleRemove}) {
  console.log(list);

  return (
    <ul className="todo__list">
      {list.map(
        todo => <TodoItem
          key={todo.id}
          handleRemove={() => handleRemove(todo.id)}
          handleChangeDone={() => handleChangeDone(todo.id)}
          {...todo}
        />
      )}
    </ul>
  );
}

export default TodoList;
