import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoods = () => {
    getAll()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  const handleFirst5Goods = () => {
    get5First()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  const handleRedGoods = () => {
    getRedGoods()
      .then(goodsFromServer => {
        setGoods(goodsFromServer);
      });
  };

  return (
    <div className="App">
      <h1 className="title is-3">Dynamic list of Goods</h1>

      <button
        className="button is-light"
        type="button"
        data-cy="all-button"
        onClick={handleAllGoods}
      >
        Load all goods
      </button>

      <button
        className="button is-light"
        type="button"
        data-cy="first-five-button"
        onClick={handleFirst5Goods}
      >
        Load 5 first goods
      </button>

      <button
        className="button is-light"
        type="button"
        data-cy="red-button"
        onClick={handleRedGoods}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
