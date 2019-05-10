import React from 'react';
import TodoItem from '../TodoItem/';

function TodoList ({list, handleDone, handleRemove}) {
  console.log(list);

  return (
    <ul className="todo__list">
      {list.map(
        todo => <TodoItem
          key={todo.id}
          handleDone={() => handleDone(todo.id)}
          handleRemove={() => handleRemove(todo.id)}
          {...todo}
        />
      )}
    </ul>
  );
}

export default TodoList;
