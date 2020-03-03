import React, { FC } from 'react';

interface Props {
  goods: Good[];
}

export const ListOfGoods: FC<Props> = ({ goods }) => (
  <ul className="list">
    {goods.map(good => (
      <li className="item" key={good.id} style={{ color: good.color }}>
        {good.name}
      </li>
    ))}
  </ul>
);
