import React from 'react';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul>
    {goods.map((good: Good) => (
      <li key={good.id} style={{ color: `${good.color}` }}>
        {good.name}
      </li>
    ))}
  </ul>
);

export default GoodsList;
