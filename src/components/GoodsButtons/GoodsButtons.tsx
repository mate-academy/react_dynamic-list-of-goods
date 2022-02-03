import React from 'react';
import { getAll, getRedGoods, get5First } from '../../api/goods';
import './GoodsButtons.scss';

type Props = {
  loadGoods: (callback:() => Promise<Good[]>) => void,
};

export const GoodsButtons: React.FC<Props> = ({ loadGoods }) => (
  <div className="buttonsOfGoods">
    <button
      type="button"
      className="button is-link is-outlined"
      onClick={() => loadGoods(getAll)}
    >
      Get all goods
    </button>

    <button
      type="button"
      onClick={() => loadGoods(getRedGoods)}
      className="button is-info is-outlined"
    >
      Get only red goods
    </button>

    <button
      type="button"
      onClick={() => loadGoods(get5First)}
      className="button is-primary is-outlined"
    >
      Get first five goods
    </button>
  </div>
);
