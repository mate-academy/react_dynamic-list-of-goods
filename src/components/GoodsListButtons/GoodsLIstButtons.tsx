import React from 'react';
import { getAllGoods, getRedGoods, getFiveFirst } from '../../api/goods';

import './GoodsListButtons.scss';

type Props = {
  loadData: (callback: () => Promise<Good[]>) => void;
};

export const GoodsListButtons: React.FC<Props> = ({ loadData }) => (
  <div className="GoodsListButtons">
    <button
      className="GoodsListButtons__button"
      type="button"
      onClick={() => loadData(getAllGoods)}
    >
      Load All goods
    </button>
    <button
      className="GoodsListButtons__button"
      type="button"
      onClick={() => loadData(getFiveFirst)}
    >
      Load 5 first goods
    </button>
    <button
      className="GoodsListButtons__button"
      type="button"
      onClick={() => loadData(getRedGoods)}
    >
      Load red goods
    </button>
  </div>
);
