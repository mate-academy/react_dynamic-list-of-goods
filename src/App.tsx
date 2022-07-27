import React, { useState } from 'react';
import { GoodsList } from './GoodsList';

import { Good } from './types/Good';

import 'bulma';
import './App.scss';

import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [selectedGoods, setSelectedGoods] = useState<Good[]>([]);
  const [hasLoadingError, setHasLoadingError] = useState(false);

  const loadGoods = async (callback:() => Promise<Good[]>) => {
    setHasLoadingError(false);

    try {
      const goods = await callback();

      setSelectedGoods(goods);
    } catch (error) {
      setHasLoadingError(true);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Dynamic list of Goods</h1>

        <button
          type="button"
          className="button is-responsive"
          data-cy="all-button"
          onClick={() => loadGoods(goodsAPI.getAll)}
        >
          Load all goods
        </button>

        <button
          type="button"
          className="button is-responsive"
          data-cy="sorted-button"
          onClick={() => loadGoods(goodsAPI.getAllSortedByColor)}
        >
          Load all sorted by color
        </button>

        <button
          type="button"
          className="button is-responsive"
          data-cy="first-five-button"
          onClick={() => loadGoods(goodsAPI.get5First)}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          className="button is-responsive"
          data-cy="red-button"
          onClick={() => loadGoods(goodsAPI.getRedGoods)}
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

        {!hasLoadingError && (
          <GoodsList goods={selectedGoods} />
        )}
      </div>
    </div>
  );
};
