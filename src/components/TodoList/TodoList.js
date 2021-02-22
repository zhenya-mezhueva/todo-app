import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from '../TodoItem';

export const TodoList = ({ filteredTodos, todos, setTodos }) => (
  <div className="todos-list">
    <ul className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          todos={todos}
          filteredTodos={filteredTodos}
          setTodos={setTodos}
        />
      ))}
    </ul>
  </div>
);

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(PropTypes.object).isRequired,
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTodos: PropTypes.func.isRequired,
};
