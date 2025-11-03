import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { useState } from 'react';
import { Good } from './types/Good';

import { getAll, get5First, getRedGoods } from './api/goods';
// or
// import * as goodsAPI from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleAllGoods = () => {
    getAll()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log('Failed to load the goods', error);
      });
  };

  const handle5FirstGoods = () => {
    get5First()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log('Failed to load the 5 first goods', error);
      });
  };

  const handleRedGoods = () => {
    getRedGoods()
      .then(setGoods)
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log('Failed to load the red goods', error);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handleAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handle5FirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handleRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
