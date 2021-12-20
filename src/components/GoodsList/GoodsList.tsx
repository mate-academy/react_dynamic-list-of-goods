import React from 'react';
import './GoodsList.scss';
import { GoodsItem } from '../GoodsItem';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <>
    <ul className="GoodsList">List of Goods</ul>
    {goods.map(good => (
      <li key={good.id} className="GoodsList__item">
        <GoodsItem good={good} />
      </li>
    ))}
  </>
);
