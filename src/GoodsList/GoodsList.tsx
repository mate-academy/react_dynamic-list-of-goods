import React from 'react';

export interface Good {
  id: number;
  name: string;
  color: string;
}

interface GoodsProps {
  goods: Good[],
}

export const GoodsList: React.FC<GoodsProps> = ( { goods } ) => (
  <ul>
    {goods.map(good => <li key={good.id} style={{color: good.color}}>{good.name}</li>)}
  </ul>
);
