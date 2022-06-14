import React from 'react';

interface Prop {
  goods: Good[];
}

export const GoodList: React.FC<Prop> = ({ goods }) => (
  <ul>
    {goods?.map(good => (
      <li
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
