import React from 'react';

interface Good {
  id: number,
  name: string,
  color: string,
}

type Props = {
  goodsList: Good[],
};

export const GoodsList: React.FC<Props> = ({ goodsList }) => (
  <ul>
    {
      goodsList.map(good => (
        <li key={good.id} style={{ color: good.color }}>
          {good.name}
        </li>
      ))
    }
  </ul>
);
