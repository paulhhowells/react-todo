import React, {useState} from 'react';

function TodoAdd (props) {
  const [value, setValue] = useState('');

  function handleChange (event) {
    setValue(event.target.value);
  }

  function handleSubmit (event) {
    event.preventDefault();

    if (value !== '') {
      props.add(value);
      setValue('');
    }
  }

  return (
    <form
      className="todo__add"
      onSubmit={handleSubmit}>
      <label
        htmlFor="todo-input"
        className="visually-hidden">
        to do
      </label>
      <input
        id="todo-input"
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className="todo__add-button">Add</button>
    </form>
  );
}

export default TodoAdd;
