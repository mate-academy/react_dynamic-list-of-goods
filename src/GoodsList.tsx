import React from 'react';

type Props = {
  goodList: Good[];
};

const GoodsList: React.FC<Props> = ({ goodList }) => (
  <ul>
    {goodList.map((good: Good) => (
      <li
        key={good.id}
        style={{ color: `${good.color}` }}
      >
        {good.name}
      </li>
    ))}
  </ul>
);

export default GoodsList;
