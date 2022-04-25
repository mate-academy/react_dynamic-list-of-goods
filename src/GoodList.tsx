import React from 'react';
import './App.scss';

type Props = {
  goods: Good[]
};

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id}>
        {good.name}
      </li>
    ))}
  </ul>
);
