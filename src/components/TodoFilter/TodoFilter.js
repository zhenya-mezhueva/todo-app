import React from 'react';
import PropTypes from 'prop-types';

export const TodoFilter = ({ changeStatusHandler }) => (
  <ul className="filters">
    <li>
      <a
        href="#/"
        className="selected"
        onClick={changeStatusHandler('all')}
      >
        All
      </a>
    </li>

    <li>
      <a
        href="#/active"
        onClick={changeStatusHandler('active')}
      >
        Active
      </a>
    </li>

    <li>
      <a
        href="#/completed"
        onClick={changeStatusHandler('completed')}
      >
        Completed
      </a>
    </li>
  </ul>
);

TodoFilter.propTypes = {
  changeStatusHandler: PropTypes.func.isRequired,
};
