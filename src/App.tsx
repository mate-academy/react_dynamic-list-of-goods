import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);

  const loadGoods = (goodsAPI: () => Promise<Good[]>) => {
    setLoading(true);
    goodsAPI()
      .then(goodsFromServer => setGoods(goodsFromServer))
      .finally(() => setLoading(false));
  };

  const handlerList = () => {
    return loadGoods(getAll);
  };

  const handlerFirst5 = () => {
    return loadGoods(get5First);
  };

  const handlerRed = () => {
    return loadGoods(getRedGoods);
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handlerList}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handlerFirst5}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handlerRed}
      >
        Load red goods
      </button>

      {loading
        ? (<h3>Loading...</h3>)
        : (<GoodsList goods={goods} />)}
    </div>
  );
};
