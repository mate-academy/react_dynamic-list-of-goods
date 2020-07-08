import React from 'react';

export const GoodsList: React.FC<GoodsArr> = ({ goods }) => {
  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} style={{ color: `${good.color}` }}>
          {' '}
          {good.name}
        </li>
      ))}
    </ul>
  );
};
