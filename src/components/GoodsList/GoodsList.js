import React from 'react';
import './GoodsList.scss';

import { GoodsListTypes } from './GoodsListTypes';

export const GoodsList = ({ todos }) => (
  <div>
    <h2>GoodsList</h2>
    <h3>Name</h3>
    <ul>
      {todos.map(todo => (
        <li
          key={todo.name}
          style={{ color: todo.color }}
        >
          {todo.name}
        </li>
      ))}
    </ul>
  </div>
);

GoodsList.propTypes = GoodsListTypes;
