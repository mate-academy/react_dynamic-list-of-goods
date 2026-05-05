import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

// eslint-disable-next-line react/display-name
export const App: React.FC = React.memo(() => {
  const [goods, setGoods] = useState<Good[]>([]);

  const getAllGoods = () => {
    getAll()
      .then(data => setGoods(data))
      .catch(error => {
        throw new Error('Error fetching all goods:' + error);
      });
  };

  const getFiveFirstGoods = () => {
    get5First()
      .then(data => setGoods(data))
      .catch(error => {
        throw new Error('Error fetching first five goods:' + error);
      });
  };

  const getOnlyRedGoods = () => {
    getRedGoods()
      .then(data => setGoods(data))
      .catch(error => {
        throw new Error('Error fetching red goods:' + error);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={getAllGoods}>
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={getFiveFirstGoods}
      >
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={getOnlyRedGoods}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
});
