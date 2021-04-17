import React from 'react';
import './GoodsList.scss';
import { propTypes } from '../types'

export const GoodsList = ({ goods }) => (
  <>
    <ul className="list-group">
      {goods.map(good => (
        <li
          className="list-group-item"
          key={good.id}
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      ))}
    </ul>
  </>
);

GoodsList.propTypes = propTypes;
