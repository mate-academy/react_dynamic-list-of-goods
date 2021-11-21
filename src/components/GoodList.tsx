import React from 'react';
import { Good } from '../react-app-env';

interface Props {
  goods: Good[] | [],
}

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul className="list app__list">
    {goods.map(good => (
      <li
        key={good.id}
        className="list__item"
        style={{
          color: good.color,
        }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
