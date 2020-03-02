import React from 'react';

type Props = {
  goods: Good[];
};

export interface Good {
  id: number;
  name: string;
  color: string;
}

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li key={good.id} style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);
