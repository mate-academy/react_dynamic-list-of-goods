import React, { FC } from 'react';

interface StateTypes {
  goodsFromServer: Good[];
}

export const GoodsList: FC<StateTypes> = ({ goodsFromServer }) => (
  <ul>
    {
      goodsFromServer.map(good => (
        <li key={good.id} style={{ color: good.color }}>{good.name}</li>
      ))
    }
  </ul>
);
