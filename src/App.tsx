import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import { getAll, get5First, getRedGoods } from './api/goods';
// import * as goodsAPI from './api/goods';
// import { error } from 'console';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handelAllGoods = () => {
    getAll()
      .then(data => setGoods(data))
      // eslint-disable-next-line no-console
      .catch(error => console.error('Error:', error));
  };

  const handelFirst5 = () => {
    get5First()
      .then(data => setGoods(data))
      // eslint-disable-next-line no-console
      .catch(error => console.error('Error:', error));
  };

  const handelColorRed = () => {
    getRedGoods()
      .then(data => setGoods(data))
      // eslint-disable-next-line no-console
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={handelAllGoods}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={handelFirst5}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={handelColorRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
