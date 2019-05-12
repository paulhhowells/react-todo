import React, {useState}  from 'react';
import TodoAdd from '../TodoAdd/';
import TodoList from '../TodoList/';
import '../../css/todo.css';

const uniqueId = (function() {
  let counter = 0;

  return function (prefix) {
    counter += 1;
    prefix = prefix || '';

    return prefix + counter;
  };
}());

function Todo () {
  const [list, setList] = useState([]);

  function add (newTodoName) {
    setList(
      previousList => [newTodoItem(newTodoName), ...previousList]
    );
  }

  function handleRemove (id) {
    setList(
      list.filter(item => item.id !== id)
    );
  }

  function handleChangeDone (id) {
    const index = list.findIndex(item => item.id === id);

    if (index >= 0) {
      setList(
        previousList => [
          ...list.slice(0, index),
          {
            ...previousList[index],
            done: !previousList[index].done
          },
          ...previousList.slice(index + 1)
        ]
      );
    }
  }

  return (
    <div className="todo">
      <TodoAdd add={add} />
      <TodoList
        list={list}
        handleRemove={handleRemove}
        handleChangeDone={handleChangeDone}
      />
    </div>
  );
}

function newTodoItem (name) {
  return {
    name: name,
    id: uniqueId(kebabCase(name)),
    done: false
  };
}

function kebabCase (string) {
  // Replace whitespace with hyphens.
  return string.replace(/\s/g, '-');
}

export default Todo;
