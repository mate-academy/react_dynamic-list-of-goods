import React, { useState } from 'react';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';

import 'bulma';
import './App.scss';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<Good[]>([]);
  const showAllGoods = () => {
    goodsAPI.getAll().then(goods => setSelectedGoods(goods));
  };

  const showAllGoodsSortedByColor = () => {
    goodsAPI.getAllSortedByColor()
      .then(goods => setSelectedGoods(goods));
  };

  const show5FirstGoods = () => {
    goodsAPI.get5First().then(goods => setSelectedGoods(goods));
  };

  const showRedGoods = () => {
    goodsAPI.getRedGoods()
      .then(goods => setSelectedGoods(goods));
  };

  const hideGoods = () => {
    setSelectedGoods([]);
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Dynamic list of Goods</h1>

        <button
          type="button"
          className="button is-responsive"
          data-cy="all-button"
          onClick={showAllGoods}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button is-responsive"
          data-cy="sorted-button"
          onClick={showAllGoodsSortedByColor}
        >
          Load all sorted by color
        </button>

        <button
          type="button"
          className="button is-responsive"
          data-cy="first-five-button"
          onClick={show5FirstGoods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button is-responsive"
          data-cy="red-button"
          onClick={showRedGoods}
        >
          Load red goods
        </button>

        <button
          type="button"
          className="button is-responsive"
          data-cy="hide-button"
          onClick={hideGoods}
        >
          Hide goods
        </button>

        <GoodsList goods={selectedGoods} />
      </div>
    </div>
  );
};
