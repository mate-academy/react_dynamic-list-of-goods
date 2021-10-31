import React from 'react';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul
    className="list"
  >
    {goods.map(good => (
      <li
        key={good.id}
        className={`${good.color} box`}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
