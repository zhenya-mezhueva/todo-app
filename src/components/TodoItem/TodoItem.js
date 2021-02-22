import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter(item => item.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    }));
  };

  return (
    <li className={todo.completed && 'completed'}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          onChange={completeHandler}
          checked={todo.completed}
        />
        <label>{todo.title}</label>
        <button
          type="button"
          className="destroy"
          onClick={deleteHandler}
        />
      </div>
      <input type="text" className="edit" />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape.object).isRequired,
  setTodos: PropTypes.func.isRequired,
};
