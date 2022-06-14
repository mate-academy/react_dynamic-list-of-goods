import React from 'react';

interface Props {
  goods: Good[],
}

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goods">
    {goods.map(good => (
      <li
        key={good.id}
        className="good"
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
