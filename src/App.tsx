import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Criterion, Good } from './types/Good';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [renderCriterion, setRenderCriterion] = useState('');

  useEffect(() => {
    switch (renderCriterion) {
      case Criterion.all:
        getAll().then(setGoods);
        break;

      case Criterion.firstFive:
        get5First().then(setGoods);
        break;

      case Criterion.onlyRed:
        getRedGoods().then(setGoods);
        break;

      default:
        setRenderCriterion('');
    }
  }, [renderCriterion]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setRenderCriterion(Criterion.all)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setRenderCriterion(Criterion.firstFive)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setRenderCriterion(Criterion.onlyRed)}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
