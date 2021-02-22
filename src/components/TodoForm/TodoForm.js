import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TodoForm = ({ setTodos }) => {
  const [query, setQuery] = useState('');

  const addTodo = () => {
    setTodos(prevTodos => [
      { id: new Date(), title: query, completed: false },
      ...prevTodos,
    ]);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addTodo();
        setQuery('');
      }}
    >
      <input
        type="text"
        className="new-todo"
        placeholder="What needs to be done?"
        value={query}
        onChange={(event) => {
          if (event.target.value.trim()) {
            setQuery(event.target.value);
          }
        }}
      />
    </form>
  );
};

TodoForm.propTypes = {
  setTodos: PropTypes.func.isRequired,
};
