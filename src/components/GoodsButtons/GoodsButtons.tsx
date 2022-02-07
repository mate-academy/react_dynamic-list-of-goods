import React from 'react';
import { getAllGoods, getFiveFirst, getRedGoods } from '../../api/goods';
import './GoodsButtons.scss';

type Props = {
  loadGoods: (
    callback: () => Promise<Good[]>
  ) => void,
};

export const GoodsButtons: React.FC<Props> = ({ loadGoods }) => (
  <div className="buttons-group">
    <button
      type="button"
      onClick={() => loadGoods(getAllGoods)}
      className="btn btn-success"
    >
      Load All goods
    </button>
    <button
      type="button"
      onClick={() => loadGoods(getFiveFirst)}
      className="btn btn-info"
    >
      Load 5 first goods
    </button>
    <button
      type="button"
      onClick={() => loadGoods(getRedGoods)}
      className="btn btn-danger"

    >
      Load red goods
    </button>
  </div>
);
