import React from 'react';

import { Good } from './TypeDefs';

interface Props {
  goods: Good[];
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id}>
          <span style={{ color: good.color }}>
            {good.name}
          </span>
        </li>
      ))}
    </ul>
  );
};
