import React from 'react';

interface Props {
  goodList: Good[];
}

export const GoodList: React.FC<Props> = ({ goodList }) => (
  <ul>
    {goodList.map(good => (
      <li
        key={good.id}
        style={{
          color: good.color,
        }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
