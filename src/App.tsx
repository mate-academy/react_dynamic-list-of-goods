import React, { useState } from 'react';
import './App.scss';
import 'bulma/css/bulma.css';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const handleAllGoodsButton = () => {
    getAll()
      .then(goodsFromServer => {
        if (goodsFromServer.length === 0) {
          throw new Error('Goods are empty');
        }

        return (setGoods(goodsFromServer));
      });
  };

  const handleFirstFiveGoodsButton = () => {
    get5First()
      .then(goodsFromServer => setGoods(goodsFromServer));
  };

  const handleRedGoodsButton = () => {
    getRedGoods()
      .then(goodsFromServer => setGoods(goodsFromServer));
  };

  return (
    <div className="App section">
      <h1 className="title">Dynamic list of Goods</h1>

      <button
        className="button"
        type="button"
        data-cy="all-button"
        onClick={handleAllGoodsButton}
      >
        Load all goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="first-five-button"
        onClick={handleFirstFiveGoodsButton}
      >
        Load 5 first goods
      </button>

      <button
        className="button"
        type="button"
        data-cy="red-button"
        onClick={handleRedGoodsButton}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />

    </div>
  );
};
