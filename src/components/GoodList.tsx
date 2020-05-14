import React from 'react';

interface Good {
  id: number;
  name: string;
  color: string;
}

type GoodsListProps = {
  goods: Good[];
}

const GoodsList: React.FC<GoodsListProps> = ({ goods }) => (
  <ul>
    {goods.map(({id, name, color}) => (
      <li key={id} style={{ color }}>
        {name}
      </li>
    ))}
  </ul>
);

export default GoodsList;
