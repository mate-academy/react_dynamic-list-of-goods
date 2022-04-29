import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="mt-4">
    {goods.map(good => (
      <li
        key={good.id}
        className="box is-block"
        style={{ color: `${good.color}` }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
