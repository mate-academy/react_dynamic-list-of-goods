import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5FirstGoods, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGooods = () => {
    getAll()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  const handle5FirstGoods = () => {
    get5FirstGoods()
      .then(goodsFromServer => {
        const result = goodsFromServer
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(0, 5);

        setGoods(result);
      });
  };

  const handleAllRedGoods = () => {
    getRedGoods()
      .then(goodsFromServer => {
        const result = goodsFromServer
          .filter(good => good.color === 'red');

        setGoods(result);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleAllGooods}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleAllRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
