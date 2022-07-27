import React, { useState } from 'react';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';

import 'bulma';
import './App.scss';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<Good[]>([]);

  const loadAllGoods = () => {
    goodsAPI.getAll()
      .then(setSelectedGoods);
  };

  const loadGoodsSortedByColor = () => {
    goodsAPI.getAllSortedByColor()
      .then(setSelectedGoods);
  };

  const load5FirstGoods = () => {
    goodsAPI.get5First()
      .then(setSelectedGoods);
  };

  const loadRedGoods = () => {
    goodsAPI.getRedGoods()
      .then(setSelectedGoods);
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Dynamic list of Goods</h1>

        <button
          type="button"
          className="button is-responsive"
          data-cy="all-button"
          onClick={loadAllGoods}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button is-responsive"
          data-cy="sorted-button"
          onClick={loadGoodsSortedByColor}
        >
          Load all sorted by color
        </button>

        <button
          type="button"
          className="button is-responsive"
          data-cy="first-five-button"
          onClick={load5FirstGoods}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button is-responsive"
          data-cy="red-button"
          onClick={loadRedGoods}
        >
          Load red goods
        </button>

        <button
          type="button"
          className="button is-responsive"
          data-cy="hide-button"
          onClick={() => setSelectedGoods([])}
        >
          Hide goods
        </button>

        <GoodsList goods={selectedGoods} />
      </div>
    </div>
  );
};
