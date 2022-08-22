import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getGoods = (get: () => Promise<Good[]>) => {
    get()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <>
      <h1>Dynamic list of Goods</h1>

      <div className="buttons">
        <button
          type="button"
          className="btn btn-outline-primary"
          data-cy="all-button"
          onClick={() => getGoods(getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="btn btn-outline-primary"
          data-cy="first-five-button"
          onClick={() => getGoods(get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="btn btn-outline-primary"
          data-cy="red-button"
          onClick={() => getGoods(getRedGoods)}
        >
          Load red goods
        </button>
      </div>

      {goods.length !== 0 && <GoodsList goods={goods} />}
    </>
  );
};
