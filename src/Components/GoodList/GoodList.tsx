import React from 'react';

interface Good {
  id: number;
  name: string;
  color: string;
}

interface Props {
  goods: Good[];
}

export const GoodList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(({ name, id, color }) => (
      <li
        key={id}
        style={{ color }}
      >
        {name}
      </li>
    ))}
  </ul>
);
