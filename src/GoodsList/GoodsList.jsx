import React from 'react';
import { TodoType } from '../types';

export const GoodsList = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};

GoodsList.propTypes = {
  goods: arrayOf(TodoType)
};

GoodsList.defaultProps = {
  goods: [],
};
