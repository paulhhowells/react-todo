import React from 'react';
import './css/app.css';
import Todo from './components/Todo/';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do</h1>
      </header>
      <main>
        <Todo />
      </main>
    </div>
  );
}

export default App;
