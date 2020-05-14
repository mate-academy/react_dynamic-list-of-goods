import React from 'react';

type GoodsListProps = {
  goodList: Good[];
};

const GoodsList: React.FC<GoodsListProps> = ({ goodList }) => (
  <ul>
    {goodList.map((good) => (
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
