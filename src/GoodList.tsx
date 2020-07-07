import React from 'react';

type Props = {
  goods: Goods[];
};

const GoodList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} style={{ color: `${good.color}` }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};

export default GoodList;
