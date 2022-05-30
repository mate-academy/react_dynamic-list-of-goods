/* eslint-disable react/jsx-filename-extension */
import { React } from 'react';
import './GoodsList.scss';

export const GoodsList = ({ goods }) => (
  <ul className="GoodsList">
    {goods.map(good => (
      <li
        className="GoodList__item"
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
