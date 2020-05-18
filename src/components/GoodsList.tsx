import React from 'react';
import { Good } from './TypeDefinitions';

type GoodsListProps = {
  goods: Good[];
};

export const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {
  return (
    <>
      <ul>
        {goods.map(({ id, color, name }) => (
          <li key={id} style={{ color }}>
            { name }
          </li>
        ))}
      </ul>
    </>
  );
};
