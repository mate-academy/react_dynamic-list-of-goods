import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [viewAll, setViewAll] = useState(false);
  const [viewA5, setView5] = useState(false);
  const [viewARed, setViewRed] = useState(false);

  useEffect(() => {
    if (viewA5) {
      const goodOfServer = goodsAPI.get5First();

      goodOfServer.then(setGoods);
      setView5(false);

      return;
    }

    if (viewARed) {
      const goodOfServer = goodsAPI.getRedGoods();

      goodOfServer.then(setGoods);
      setViewRed(false);

      return;
    }

    if (viewAll) {
      const goodOfServer = goodsAPI.getAll();

      goodOfServer.then(setGoods);
      setViewAll(false);

      return;
    }
  }, [viewAll, viewA5, viewARed]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setViewAll(true)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setView5(true)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setViewRed(true)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
