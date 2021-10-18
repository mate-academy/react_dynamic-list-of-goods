import React from 'react';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map(good => (
      <li
        key={good.name}
        style={{ color: good.color }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

export default GoodsList;
