import React from 'react';
import { Good } from '../Good';

interface Props {
  goods: Good[],
}

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id}>
          <Good good={good} />
        </li>
      ))}
    </ul>
  );
};
