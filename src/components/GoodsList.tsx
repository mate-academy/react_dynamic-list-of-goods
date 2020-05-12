import React from 'react';
import { IGoodsItem } from '../helpers/interfaces';

type GoodsListProps = {
  goods: IGoodsItem[]
}

export const GoodsList: React.FC<GoodsListProps> = ({ goods }) => {
  return (
    <ul className="collection">
      {goods.map(({ id, name, color }) => (
        <li
          className="collection-item"
          key={id}
          style={{ color: `${color}`, }}
        >
          {name}
        </li>
      ))}
    </ul>
  )
}
