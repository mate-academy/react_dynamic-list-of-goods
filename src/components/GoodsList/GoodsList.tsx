import React from 'react';
import { Good } from '../../types/Good';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="GoodsList">
    {goods.map(({ id, name, color }) => (
      <li
        key={id}
        data-cy="good"
        style={{
          color,
          borderColor: color,
        }}
        className="GoodsList__item"
      >
        {name}
      </li>
    ))}
  </ul>
);
