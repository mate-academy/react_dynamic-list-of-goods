import React from 'react';
import { Good } from './types/Good';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => {
      const style = {
        color: good.color,
      };

      return (
        <li key={good.id} data-cy="good" style={style}>
          {good.name}
        </li>
      );
    })}
  </ul>
);
