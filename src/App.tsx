import { FC, useState } from 'react';
import './App.scss';
import { Good } from './types/Good';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const hendlerAllGoods = () => {
    getAll().then((goodsFromServer) => {
      setGoods(goodsFromServer);
    });
  };

  const hendler5FirstGoods = () => {
    get5First().then((goodsFromServer) => {
      setGoods(goodsFromServer);
    });
  };

  const hendlerRedGoods = () => {
    getRedGoods().then((goodsFromServer) => {
      setGoods(goodsFromServer);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={hendlerAllGoods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={hendler5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={hendlerRedGoods}
      >
        Load red goods
      </button>

      {goods.length === 0 || <GoodsList goods={goods} />}

    </div>
  );
};
