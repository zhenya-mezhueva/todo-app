import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Buy bread', completed: false },
    { id: 2, title: 'Buy milk', completed: false },
    { id: 3, title: 'Call to the office', completed: false },
  ]);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoForm setTodos={setTodos} />
      </header>

      <section className="main">
        <input type="checkbox" id="toggle-all" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList todos={todos} setTodos={setTodos} />
      </section>

      <footer className="footer">
        <span className="todo-count">
          {todos.length}
          &nbsp;items left
        </span>

        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>

          <li>
            <a href="#/active">Active</a>
          </li>

          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>

        <button type="button" className="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
  );
}

export default App;
