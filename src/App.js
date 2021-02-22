import React, { useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { TodoFilter } from './components/TodoFilter';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Buy bread', completed: false },
    { id: 2, title: 'Buy milk', completed: false },
  ]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case 'active':
        setFilteredTodos(todos.map(todo => !todo.completed));
        break;
      case 'completed':
        setFilteredTodos(todos.map(todo => todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const changeStatusHandler = (newStatus) => {
    setStatus(newStatus);
  };

  useEffect(() => {
    filterHandler();
  }, [status, todos]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, []);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoForm setTodos={setTodos} />
      </header>

      <section className="main">
        <input type="checkbox" id="toggle-all" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList
          filteredTodos={filteredTodos}
          setTodos={setTodos}
          todos={todos}
        />
      </section>

      <footer className="footer">
        <span className="todo-count">
          {todos.length}
          &nbsp;items left
        </span>

        <TodoFilter changeStatusHandler={changeStatusHandler} />

        <button type="button" className="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
  );
}

export default App;
