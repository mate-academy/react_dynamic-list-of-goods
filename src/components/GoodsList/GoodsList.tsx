import React from 'react';
import { Good } from '../../types/Good';
import './GoodsList.scss';

type Props = {
  goods: Good[]
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goodsList">
    {goods.map(good => {
      const {
        id,
        name,
        color,
      } = good;

      return (
        <li
          key={id}
          data-cy="good"
          className="goodsList__item"
          style={{ color }}
        >
          {name}
        </li>
      );
    })}
  </ul>
);
