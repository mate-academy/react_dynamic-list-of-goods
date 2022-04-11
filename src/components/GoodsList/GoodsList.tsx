import React from 'react';

type Props = {
  goods: Good[],
};

export const GoodsList:React.FC<Props> = ({ goods }) => (
  <ul className="list mt-5">
    {goods.map(good => (
      <li
        className="title is-5"
        key={good.id}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);
