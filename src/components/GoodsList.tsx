import React from 'react';
import { getAll, get5First, getRedGoods } from '../api/goods';
import { Good, CallbackType } from '../types/Types';

interface Props {
  onRender: (callback: CallbackType) => void;
  goodsToRender: Good[];
}

export const GoodsList: React.FC<Props> = ({ onRender, goodsToRender }) => {
  return (
    <div>
      <ul>
        {goodsToRender.map(good => (
          <li
            key={good.id}
            style={{
              color: `${good.color}`,
            }}
          >
            {good.name}
          </li>
        ))}
      </ul>
      <button
        onClick={() => onRender(getAll)}
        type="button"
      >
        Load All goods
      </button>
      <button
        onClick={() => onRender(get5First)}
        type="button"
      >
        Load 5 first goods
      </button>
      <button
        onClick={() => onRender(getRedGoods)}
        type="button"
      >
        Load red goods
      </button>
    </div>
  );
};
