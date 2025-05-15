import React from 'react';
import { Good } from './types/Good';
import './GoodsList.scss';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="GoodsList">
    {goods.map(good => {
      let color = '';

      switch (good.color) {
        case 'red':
          color = 'rgb(255, 0, 0)';
          break;
        case 'green':
          color = 'rgb(0, 128, 0)';
          break;
        case 'blue':
          color = 'rgb(0, 0, 255)';
          break;
        default:
          color = 'black';
      }

      return (
        <li
          key={good.id}
          data-cy="good"
          className={`GoodsList__item`}
          style={{ color }}
        >
          {good.name}
        </li>
      );
    })}
  </ul>
);
