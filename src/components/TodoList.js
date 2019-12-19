
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({ listOfGoods }) {
  return (
    <ul>
      {
        listOfGoods.map(good => <TodoItem good={good} key={good.id} />)
      }
    </ul>
  );
}

TodoList.propTypes = {
  listOfGoods: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
