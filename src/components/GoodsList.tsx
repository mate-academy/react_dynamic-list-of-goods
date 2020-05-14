import React from 'react';
import GoodsIcon from './GoodsIcon';

type Props = {
  goods: Good[];
};

const GoodsList: React.FC<Props> = ({ goods }) => (
  <ul className="goods__list">
    {!goods.length
      ? <p className="goods__item">No elements to display</p>
      : goods.map(({ id, name, color }) => (
        <li key={id} className="goods__item" style={{ color }}>
          <GoodsIcon commodity={name} w="40" h="40" />
          &nbsp;
          {name}
        </li>
      ))}
  </ul>
);

export default GoodsList;
